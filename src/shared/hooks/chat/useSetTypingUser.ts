import { gql, useMutation } from '@apollo/client';

import { User } from '../../../types/User';

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

  const [mutate, { data, loading, error }] = useMutation<{ typingUser: User }>(SET_TYPING_USER, {
    variables: { roomId },
  });

  return { mutate, data: data?.typingUser, loading, error };
};
