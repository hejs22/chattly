import { StyleSheet } from 'react-native';
import { BubbleProps, IMessage, MessageText } from 'react-native-gifted-chat';

import commonStyles from '../../styles';

interface MessageBubbleProps {
  message: Readonly<BubbleProps<IMessage>>;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isLastMessage = message.nextMessage && !message.nextMessage._id;

  const additionalMargin = {
    marginBottom: !isLastMessage ? 10 : 20,
  };

  return (
    <MessageText
      {...message}
      containerStyle={{
        left: {
          ...styles.container,
          ...styles.left,
          ...additionalMargin,
        },
        right: {
          ...styles.container,
          ...styles.right,
          ...additionalMargin,
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
  },
  left: {
    backgroundColor: commonStyles.colors.white,
    borderBottomLeftRadius: 0,
    width: '70%',
    marginLeft: '10%',
  },
  right: {
    backgroundColor: commonStyles.colors.purple,
    borderBottomRightRadius: 0,
    width: '70%',
    marginRight: '5%',
  },
});

export default MessageBubble;
