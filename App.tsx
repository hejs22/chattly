import { ApolloProvider } from '@apollo/client';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import Home from './src/navigation/Navigation';
import ApiClient from './src/services/ApiClient';
import { AuthContext } from './src/shared/contexts/AuthContext';
import commonStyles from './src/styles';

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    Regular: Poppins_400Regular,
    Medium: Poppins_500Medium,
    SemiBold: Poppins_600SemiBold,
    Bold: Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const updateAuthContext = (isSignedIn: boolean) => {
    setIsSignedIn(isSignedIn);
  };

  return (
    <ApolloProvider client={ApiClient}>
      <AuthContext.Provider value={{ isSignedIn, setIsSignedIn: updateAuthContext }}>
        <View style={styles.container}>
          <Home />
        </View>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screen,
  },
});
