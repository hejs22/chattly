import { View, Text, ActivityIndicator } from 'react-native';

import ChatRoomsList from '../../components/chat-room/ChatRoomsList';
import useUserRooms from '../../shared/hooks/useUserRooms';

const RoomsScreen = () => {
  const { data, loading, error } = useUserRooms();

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!data || error) {
    return (
      <View>
        <Text>No chat rooms found.</Text>
      </View>
    );
  }

  return (
    <View>
      <ChatRoomsList rooms={data} />
    </View>
  );
};

export default RoomsScreen;
