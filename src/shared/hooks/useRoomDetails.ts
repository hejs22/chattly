import { gql, useQuery } from '@apollo/client';

import { RoomDetails } from '../../types/Chat';

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

  const { data, loading, error } = useQuery<{ room: RoomDetails }>(GET_ROOM_DETAILS);
  return { loading, error, data: data?.room };
};

export default useRoomDetails;
