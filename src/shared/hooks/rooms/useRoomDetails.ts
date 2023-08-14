import { gql, useQuery } from '@apollo/client';

import { RoomDetails } from '../../../types/Chat';

const useRoomDetails = (id: string) => {
  const GET_ROOM_DETAILS = gql`
     {
      room(id: "${id}") {
        id
        messages {
          body
          id
          insertedAt
          user {
            email
            firstName
            id
            lastName
            role
          }
        }
        name
        user {
           email
            firstName
            id
            lastName
            role
        }
      }
    }
  `;

  const { data, loading, error, startPolling } = useQuery<{ room: RoomDetails }>(GET_ROOM_DETAILS);

  startPolling(250);
  return { loading, error, data: data?.room };
};

export default useRoomDetails;
