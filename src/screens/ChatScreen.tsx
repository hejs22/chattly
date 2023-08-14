import { View, StyleSheet } from 'react-native';

import Chat from '../components/chat/Chat';
import useRoomDetails from '../shared/hooks/rooms/useRoomDetails';
import { useSetTypingUser } from '../shared/hooks/chat/useSetTypingUser';
import { useTypingUser } from '../shared/hooks/chat/useTypingUser';
import { GiftedMessageMapper } from '../shared/utils/chatUtils';
import commonStyles from '../styles';
import { ChatScreenProps } from '../types/Navigation';

const ChatScreen = ({ route }: ChatScreenProps) => {
  const { messages, id, user } = route.params.chatRoomDetails;
  const { data: roomDetails } = useRoomDetails(id);
  const { data: typingUser } = useTypingUser(id);
  const { mutate } = useSetTypingUser(id);

  return (
    <View style={styles.container}>
      <Chat
        messages={GiftedMessageMapper.manyToGiftedChatFormat(roomDetails?.messages ?? messages)}
        roomId={id}
        myId={user.id}
        typingUser={typingUser ?? null}
        onTypingStart={() => mutate()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screen,
  },
});

export default ChatScreen;
