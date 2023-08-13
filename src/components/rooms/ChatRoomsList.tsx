import { StyleSheet, View } from 'react-native';

import ChatRoomItem from './ChatRoomItem';
import { Room } from '../../types/Chat';

interface ChatRoomsListProps {
  rooms: Room[];
}

const ChatRoomsList = ({ rooms }: ChatRoomsListProps) => {
  return (
    <View style={styles.container}>
      {rooms.map((room) => (
        <ChatRoomItem key={room.id} room={room} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    gap: 10,
    minHeight: '100%',
  },
});

export default ChatRoomsList;
