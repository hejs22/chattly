import { View, Text, StyleSheet } from 'react-native';

import ChatRoomItemSkeleton from '../components/chat-room/ChatRoomItemSkeleton';
import ChatRoomsList from '../components/chat-room/ChatRoomsList';
import useUserRooms from '../shared/hooks/useUserRooms';

const RoomsScreen = () => {
  const { data, loading, error } = useUserRooms();

  return (
    <View>
      {loading && <ChatRoomItemSkeleton />}

      {(!data || error) && !loading && <Text style={styles.error}>No chat rooms found.</Text>}

      {data && <ChatRoomsList rooms={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: 'Medium',
    fontSize: 15,
  },
});

export default RoomsScreen;
