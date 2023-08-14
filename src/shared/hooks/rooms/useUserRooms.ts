import { gql, useQuery } from '@apollo/client';

import { UserRooms } from '../../../types/Chat';

const useUserRooms = () => {
  const GET_USERS_ROOMS = gql`
    {
      usersRooms {
        user {
          email
          firstName
          lastName
          id
          role
        }
        rooms {
          id
          name
        }
      }
    }
  `;

  const { data, loading, error, startPolling } = useQuery<{ usersRooms: UserRooms }>(
    GET_USERS_ROOMS
  );
  startPolling(1000);
  return { loading, error, data: data?.usersRooms.rooms };
};

export default useUserRooms;
