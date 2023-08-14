import { memo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import ChatInputToolbar from './chat-elements/ChatInputToolbar';
import MessageBubble from './chat-elements/MessageBubble';
import SendMessageButton from './chat-elements/SendMessageButton';
import UserTypingIndicator from './chat-elements/UserTypingIndicator';
import { useSendMessage } from '../../shared/hooks/chat/useSendMessage';
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
  const [displayedMessages, setDisplayedMessages] = useState(messages);
  const { mutate } = useSendMessage();

  const createFailedMessageAlert = (): IMessage => {
    const date = new Date();
    return {
      _id: date.getTime().toString().concat(date.toISOString()),
      text: '*** Failed to send message. ***',
      user: { _id: myId },
      createdAt: date,
    };
  };

  const handleSendMessage = async (messages: IMessage[] = []) => {
    const body = messages[0].text;
    try {
      setDisplayedMessages((prev) => GiftedChat.append(prev, messages));
      await mutate(body, roomId);
    } catch (e) {
      setDisplayedMessages((prev) => GiftedChat.append(prev, [createFailedMessageAlert()]));
    }
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={displayedMessages}
        onSend={(displayedMessages) => handleSendMessage(displayedMessages)}
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

export default memo(Chat);
