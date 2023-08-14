import { View, Text, StyleSheet } from 'react-native';

import ChatRoomItemSkeleton from '../components/rooms/ChatRoomItemSkeleton';
import ChatRoomsList from '../components/rooms/ChatRoomsList';
import useUserRooms from '../shared/hooks/rooms/useUserRooms';
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
    width: '100%',
    textAlign: 'center',
    color: commonStyles.colors.red,
    padding: 20,
    fontSize: 15,
  },
});

export default RoomsScreen;
