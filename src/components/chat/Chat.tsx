import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import ChatInputToolbar from './chat-elements/ChatInputToolbar';
import MessageBubble from './chat-elements/MessageBubble';
import SendMessageButton from './chat-elements/SendMessageButton';
import UserTypingIndicator from './chat-elements/UserTypingIndicator';
import { useSendMessage } from '../../shared/hooks/useSendMessage';
import commonStyles from '../../styles';
import { User } from '../../types/User';

interface ChatProps {
  messages: IMessage[];
  roomId: string;
  myId: string;
  typingUser: User | null;
  onTypingStart?: () => void;
}

const Chat = ({ messages, roomId, myId, typingUser, onTypingStart }: ChatProps) => {
  const { mutate } = useSendMessage();

  const onSend = async (messages: IMessage[] = []) => {
    const body = messages[0].text;
    try {
      await mutate({ variables: { body, roomId } });
    } catch (e) {
      // TODO better error handling
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        onInputTextChanged={onTypingStart}
        renderBubble={(props) => <MessageBubble {...props} />}
        renderInputToolbar={(props) => <ChatInputToolbar {...props} />}
        renderSend={(props) => <SendMessageButton size={commonStyles.sizes.iconSize} {...props} />}
        renderFooter={() => <UserTypingIndicator />}
        renderAvatar={null}
        scrollToBottom
        placeholder=""
        isTyping={!!typingUser && typingUser.id === myId}
        minInputToolbarHeight={100}
        user={{ _id: myId }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default Chat;
