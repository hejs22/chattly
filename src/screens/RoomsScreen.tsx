import { View, Text, StyleSheet } from 'react-native';

import ChatRoomItemSkeleton from '../components/rooms/ChatRoomItemSkeleton';
import ChatRoomsList from '../components/rooms/ChatRoomsList';
import useUserRooms from '../shared/hooks/useUserRooms';
import commonStyles from '../styles';

const RoomsScreen = () => {
  const { data, loading, error } = useUserRooms();

  return (
    <View style={styles.container}>
      {loading && <ChatRoomItemSkeleton />}

      {(!data || error) && !loading && <Text style={styles.error}>No chat rooms found.</Text>}

      {data && <ChatRoomsList rooms={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screen,
  },
  error: {
    fontFamily: 'Medium',
    fontSize: 15,
  },
});

export default RoomsScreen;
