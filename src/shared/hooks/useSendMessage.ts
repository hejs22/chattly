import { gql, useMutation } from '@apollo/client';

export const useSendMessage = () => {
  const SEND_MESSAGE = gql`
    mutation SendMessage($body: String!, $roomId: String!) {
      sendMessage(body: $body, roomId: $roomId) {
        id
        body
        insertedAt
        user {
          email
          firstName
          lastName
          id
          role
        }
      }
    }
  `;

  const [send, { data, loading, error }] = useMutation(SEND_MESSAGE);
  return { mutate: send, data, loading, error };
};
