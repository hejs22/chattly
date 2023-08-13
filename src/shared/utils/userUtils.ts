import { User } from '../../types/User';

export const getUserInitials = (user: User) => {
  return user.firstName.slice(0, 1) + user.lastName.slice(0, 1);
};
