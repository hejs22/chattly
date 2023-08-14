import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export const useAuth = () => {
  const { setIsSignedIn, isSignedIn } = useContext(AuthContext);
  return { isSignedIn, setIsSignedIn };
};
