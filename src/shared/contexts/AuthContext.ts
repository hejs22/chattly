import { createContext } from 'react';

export const AuthContext = createContext(
  {} as { setIsSignedIn: (value: boolean) => void; isSignedIn: boolean } // eslint-disable-line no-unused-vars
);
