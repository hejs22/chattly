import { RoomDetails } from './Chat';
import { RouteProp } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Rooms: undefined;
  Chat: RouteProp<{ params: { chatRoomDetails: RoomDetails } }, 'params'>;
};
