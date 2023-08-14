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

  const [mutate, { data, loading, error }] = useMutation(SEND_MESSAGE);

  const sendMessage = async (body: string, roomId: string) => {
    await mutate({ variables: { body, roomId } });
  };

  return { mutate: sendMessage, data, loading, error };
};
