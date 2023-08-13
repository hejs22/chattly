import { RoomDetails } from './Chat';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Rooms: undefined;
  Chat: { chatRoomDetails: RoomDetails };
};

export type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'Chat'>;
