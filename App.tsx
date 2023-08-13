import { ApolloProvider } from '@apollo/client';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { StyleSheet, View } from 'react-native';

import Home from './src/navigation/Navigation';
import ApiClient from './src/services/ApiClient';
import commonStyles from './src/styles';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Regular: Poppins_400Regular,
    Medium: Poppins_500Medium,
    SemiBold: Poppins_600SemiBold,
    Bold: Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ApolloProvider client={ApiClient}>
      <View style={styles.container}>
        <Home />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screen,
  },
});
