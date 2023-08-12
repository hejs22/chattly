import { gql, useQuery } from '@apollo/client';

const useRooms = () => {
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

  return useQuery(GET_USERS_ROOMS);
};

export default useRooms;
