import { gql, useSubscription } from '@apollo/client';

import { User } from '../../../types/User';

export const useTypingUser = (roomId: string) => {
  const TYPING_USER = gql`
    subscription TypingUser($roomId: String!) {
      typingUser(roomId: $roomId) {
        id
        email
        firstName
        lastName
        role
      }
    }
  `;

  const { data, loading, error } = useSubscription<{ typingUser: User }>(TYPING_USER, {
    variables: { roomId },
  });
  return { data: data?.typingUser, loading, error };
};
