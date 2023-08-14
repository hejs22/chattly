import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';

export const getAuthorizationToken = async () => {
  return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
};

export const updateAuthorizationToken = async (token: string) => {
  await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const isSignedIn = async () => {
  const token = await getAuthorizationToken();
  return !!token;
};
