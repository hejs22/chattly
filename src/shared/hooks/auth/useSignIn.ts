import { gql, useMutation } from '@apollo/client';

import { useAuth } from './useAuth';
import { updateAuthorizationToken } from '../../../services/AuthService';

export const useSignIn = () => {
  const { setIsSignedIn } = useAuth();
  const SIGN_IN = gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
        user {
          id
        }
      }
    }
  `;
  const [mutate, { data, loading, error }] = useMutation<{ loginUser: { token: string } }>(SIGN_IN);

  const signIn = async (email: string, password: string) => {
    await mutate({
      variables: { email, password },
      onCompleted: (res) => {
        updateAuthorizationToken(res.loginUser.token);
        setIsSignedIn(true);
      },
    });
  };

  return { mutate: signIn, data, loading, error };
};
