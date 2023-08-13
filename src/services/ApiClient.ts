import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';

import { getAuthorizationToken } from './AuthService';
import AsyncParamsPhoenixSocket from '../shared/utils/socket';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthorizationToken();
  const authorization = token ? `Bearer ${token}` : '';
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const phoenixSocket = new AsyncParamsPhoenixSocket('wss://chat.thewidlarzgroup.com/socket', {
  params: async () => {
    const token = getAuthorizationToken();
    if (!token) return {};
    return {
      token,
    };
  },
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);
const websocketLink = createAbsintheSocketLink(absintheSocket);

const ApiClient = new ApolloClient({
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    websocketLink as any,
    authLink.concat(httpLink)
  ),
  cache: new InMemoryCache(),
});

export default ApiClient;
