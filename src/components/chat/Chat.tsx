import { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import ChatInputToolbar from './ChatInputToolbar';
import MessageBubble from './MessageBubble';
import SendMessageButton from './SendMessageButton';

interface ChatProps {
  messages: IMessage[];
}

const Chat = ({ messages }: ChatProps) => {
  const [chatMessages, setChatMessages] = useState(messages);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setChatMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={chatMessages}
        onSend={(messages) => onSend(messages)}
        renderBubble={(props) => <MessageBubble {...props} />}
        renderInputToolbar={(props) => <ChatInputToolbar {...props} />}
        renderSend={(props) => <SendMessageButton size={50} {...props} />}
        renderAvatar={null}
        scrollToBottom
        placeholder=""
        minInputToolbarHeight={100}
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
