import { StyleSheet, View } from 'react-native';

import RoomItem from './RoomItem';
import { Room } from '../../types/Chat';
import { memo } from 'react';

interface ChatRoomsListProps {
  rooms: Room[];
}

const RoomsList = ({ rooms }: ChatRoomsListProps) => {
  return (
    <View style={styles.container}>
      {rooms.map((room) => (
        <RoomItem key={room.id} room={room} />
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

export default memo(RoomsList);
