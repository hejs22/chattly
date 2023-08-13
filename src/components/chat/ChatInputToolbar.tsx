import { StyleSheet } from 'react-native';
import { IMessage, InputToolbar, InputToolbarProps } from 'react-native-gifted-chat';

import commonStyles from '../../styles';

const ChatInputToolbar = ({ ...props }: InputToolbarProps<IMessage>) => {
  return <InputToolbar {...props} containerStyle={styles.container} primaryStyle={styles.input} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: commonStyles.colors.blue,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: commonStyles.colors.white,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginRight: 50,
  },
});

export default ChatInputToolbar;
