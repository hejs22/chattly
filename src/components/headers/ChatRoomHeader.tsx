import { View, Text, StyleSheet, Pressable } from 'react-native';

import CARET_ICON from '../../assets/caret.svg';
import PHONE_ICON from '../../assets/phone.svg';
import VIDEO_CALL_ICON from '../../assets/videocall.svg';
import IconButton from '../../primitives/IconButton';
import { Screens } from '../../shared/consts/ScreensConstants';
import { navigate } from '../../shared/utils/navigationUtils';
import commonStyles from '../../styles';
import { User } from '../../types/User';
import UserPicture from '../user/UserPicture';

interface ChatRoomHeaderProps {
  user: User;
}

const ChatRoomHeader = ({ user }: ChatRoomHeaderProps) => {
  const navigateToRoomsList = () => {
    navigate(Screens.ROOMS, {});
  };

  return (
    <View style={styles.container}>
      <Pressable onTouchEnd={navigateToRoomsList} style={styles.backButton}>
        <CARET_ICON width={10} height={20} fill="#5603AD" />
      </Pressable>
      <UserPicture size={44} />
      <View>
        <Text
          numberOfLines={1}
          style={styles.username}>{`${user.firstName} ${user.lastName}`}</Text>
        <Text style={styles.lastActive}>Active now</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <IconButton>
          <PHONE_ICON width={34} height={34} />
        </IconButton>
        <IconButton>
          <VIDEO_CALL_ICON width={34} height={34} />
        </IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screenHeader,
    gap: 10,
  },
  username: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'SemiBold',
    color: commonStyles.colors.purpleDark,
    overflow: 'hidden',
  },
  lastActive: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: commonStyles.colors.white,
  },
  backButton: {
    padding: 10,
  },
  buttonsContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 10,
  },
});

export default ChatRoomHeader;
