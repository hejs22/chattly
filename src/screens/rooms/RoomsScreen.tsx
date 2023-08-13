import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

import ChatRoomsList from '../../components/chat-room/ChatRoomsList';
import useUserRooms from '../../shared/hooks/useUserRooms';

const RoomsScreen = () => {
  const { data, loading, error } = useUserRooms();

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator style={styles.loading} size="large" />}

      {(!data || error) && <Text style={styles.error}>No chat rooms found.</Text>}

      {data && <ChatRoomsList rooms={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  },
  loading: {
    margin: 'auto',
  },
  error: {
    fontFamily: 'Medium',
    fontSize: 15,
  },
});

export default RoomsScreen;
