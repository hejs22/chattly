import { useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import MessageBubble from './MessageBubble';

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
        renderBubble={(props) => <MessageBubble message={props} />}
        renderAvatar={null}
        scrollToBottom
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
