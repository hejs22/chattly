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
    borderTopRightRadius: commonStyles.sizes.radiusM,
    borderTopLeftRadius: commonStyles.sizes.radiusM,
  },
  input: {
    backgroundColor: commonStyles.colors.white,
    borderRadius: commonStyles.sizes.radiusM,
    borderBottomRightRadius: 0,
    marginRight: 50,
  },
});

export default ChatInputToolbar;
