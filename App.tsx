import { ApolloProvider } from '@apollo/client';
import { StyleSheet } from 'react-native';

import Home from './src/navigation/Navigation';
import ApiClient from './src/services/ApiClient';

export default function App() {
  return (
    <ApolloProvider client={ApiClient}>
      <Home />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
