import { View, StyleSheet } from 'react-native';

import Chat from '../components/chat/Chat';
import { mapMessagesToCorrectFormat } from '../shared/utils/chatUtils';
import commonStyles from '../styles';
import { ChatScreenProps } from '../types/Navigation';

const ChatScreen = ({ route }: ChatScreenProps) => {
  const { messages } = route.params.chatRoomDetails;

  return (
    <View style={styles.container}>
      <Chat messages={mapMessagesToCorrectFormat(messages)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screen,
  },
});

export default ChatScreen;
