import { ApolloProvider } from '@apollo/client';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Home from './src/navigation/Navigation';
import ApiClient from './src/services/ApiClient';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Medium: Poppins_500Medium,
    Regular: Poppins_400Regular,
    Bold: Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ApolloProvider client={ApiClient}>
      <Home />
    </ApolloProvider>
  );
}
