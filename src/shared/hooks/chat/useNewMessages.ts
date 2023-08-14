import { gql, useSubscription } from '@apollo/client';

export const useNewMessages = (roomId: string) => {
  const MESSAGE_ADDED = gql`
    subscription MessageAdded($roomId: String!) {
      messageAdded(roomId: $roomId) {
        id
        body
        insertedAt
        user {
          id
          firstName
          lastName
        }
      }
    }
  `;

  const { data, loading, error } = useSubscription(MESSAGE_ADDED, {
    variables: { roomId },
  });
  return { data, loading, error, hasNewMessages: !!data };
};
