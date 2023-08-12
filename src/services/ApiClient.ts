import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getAuthorizationToken } from './AuthService';

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

const ApiClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default ApiClient;
