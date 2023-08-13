import { gql, useMutation } from '@apollo/client';

import { User } from '../../types/User';

export const useSetTypingUser = (roomId: string) => {
  const SET_TYPING_USER = gql`
    mutation TypingUser($roomId: String!) {
      typingUser(roomId: $roomId) {
        email
        firstName
        lastName
        id
        role
      }
    }
  `;

  const [send, { data, loading, error }] = useMutation<{ typingUser: User }>(SET_TYPING_USER, {
    variables: { roomId },
  });
  return { mutate: send, data: data?.typingUser, loading, error };
};
