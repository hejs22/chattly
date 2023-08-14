import * as AbsintheSocket from '@absinthe/socket';
import { AbsintheSocketLink, createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';

import { getAuthorizationToken } from './AuthService';
import config from '../AppConfig';
import AsyncParamsPhoenixSocket from '../shared/utils/socket';

class ApiClientBuilder {
  private httpLink: ApolloLink | undefined;
  private authedLink: ApolloLink | undefined;
  private websocketLink: AbsintheSocketLink | undefined;

  static create() {
    return new ApiClientBuilder();
  }

  addHttpLink(uri: string) {
    this.httpLink = createHttpLink({
      uri,
    });
    return this;
  }

  addWS(uri: string) {
    const phoenixSocket = new AsyncParamsPhoenixSocket(uri, {
      params: async () => {
        const token = await getAuthorizationToken();
        if (!token) return {};
        return {
          token,
        };
      },
    });

    const absintheSocket = AbsintheSocket.create(phoenixSocket);
    this.websocketLink = createAbsintheSocketLink(absintheSocket);
    return this;
  }

  private buildAuthedLink() {
    if (!this.httpLink) {
      throw new Error('Token or HttpLink missing.');
    }

    this.authedLink = setContext(async (_, { headers }) => {
      const token = await getAuthorizationToken();
      const authorization = token ? `Bearer ${token}` : '';
      return {
        headers: {
          ...headers,
          authorization,
        },
      };
    }).concat(this.httpLink);
  }

  private splitLink() {
    if (!this.authedLink || !this.websocketLink) {
      throw new Error('HttpLink or WebsocketLink are missing.');
    }

    return split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      this.websocketLink as any,
      this.authedLink
    );
  }

  build() {
    this.buildAuthedLink();
    const finalLink = this.splitLink();
    return new ApolloClient({ link: finalLink, cache: new InMemoryCache() });
  }
}

const ApiClient = ApiClientBuilder.create()
  .addHttpLink(config.apiHttpURL)
  .addWS(config.apiWsURL)
  .build();

export default ApiClient;
