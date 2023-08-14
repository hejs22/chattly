import { View, Text, StyleSheet } from 'react-native';

import ChatRoomItemSkeleton from './ChatRoomItemSkeleton';
import { Screens } from '../../shared/consts/ScreensConstants';
import useRoomDetails from '../../shared/hooks/rooms/useRoomDetails';
import { navigate } from '../../shared/utils/navigationUtils';
import {
  calculateHowMuchTimePassedSince,
  parseTimeInSecondsToStringExpression,
} from '../../shared/utils/timeUtils';
import commonStyles from '../../styles';
import { Room, RoomDetails } from '../../types/Chat';
import UserPicture from '../user/UserPicture';

interface ChatRoomItemProps {
  room: Room;
}

const IS_NEW_TIME_THRESHOLD_IN_SECONDS = 60;

const ChatRoomItem = ({ room }: ChatRoomItemProps) => {
  const { data, loading, error } = useRoomDetails(room.id);

  const navigateToChatRoom = (roomDetails: RoomDetails) => {
    navigate(Screens.CHAT, { chatRoomDetails: roomDetails });
  };

  const extractDataFromQueryResult = (roomDetails: RoomDetails) => {
    const lastMessage = roomDetails.messages[roomDetails.messages.length - 1];
    const lastMessageBody = lastMessage.body ?? 'Say "hi" to your new friend!';
    const lastMessageTime = lastMessage.insertedAt;
    const secondsSinceLastMessage = calculateHowMuchTimePassedSince(new Date(lastMessageTime));
    const isNew = secondsSinceLastMessage < IS_NEW_TIME_THRESHOLD_IN_SECONDS;

    return { lastMessage, isNew, lastMessageBody, secondsSinceLastMessage };
  };

  if (loading) {
    return <ChatRoomItemSkeleton />;
  } else if (!data || error) {
    return (
      <View style={styles.container}>
        <Text numberOfLines={1} style={[styles.error]}>
          Failed to load chat room "{room.name}"
        </Text>
      </View>
    );
  }

  const { lastMessage, isNew, lastMessageBody, secondsSinceLastMessage } =
    extractDataFromQueryResult(data);

  return (
    <View
      style={[styles.container, isNew && styles.highlighted]}
      onTouchEnd={() => navigateToChatRoom(data)}>
      <UserPicture size={64} />

      <View style={styles.content}>
        <View style={styles.lastMessageTime}>
          {lastMessage && isNew && <View style={styles.isActiveDot} />}

          {lastMessage && !isNew && (
            <Text numberOfLines={1} style={styles.text}>
              {parseTimeInSecondsToStringExpression(secondsSinceLastMessage)}
            </Text>
          )}
        </View>

        <Text
          numberOfLines={1}
          style={[styles.text, styles.title, isNew && styles.highlightedText]}>
          {room.name}
        </Text>

        <Text
          numberOfLines={1}
          style={[styles.text, styles.message, isNew && styles.highlightedText]}>
          {lastMessageBody}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 12,
    borderRadius: commonStyles.sizes.radiusM,
    backgroundColor: commonStyles.colors.white,
    flexDirection: 'row',
    gap: 15,
    fontFamily: 'Regular',
  },
  highlighted: {
    backgroundColor: commonStyles.colors.purpleDark,
  },
  highlightedText: {
    color: commonStyles.colors.white,
  },
  content: {
    flexGrow: 1,
  },
  text: {
    overflow: 'hidden',
    maxWidth: '80%',
    color: commonStyles.colors.black,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Medium',
    lineHeight: 20,
  },
  message: {
    fontSize: 14,
  },
  lastMessageTime: {
    fontSize: 13,
    color: commonStyles.colors.gray,
    alignSelf: 'flex-end',
  },
  isActiveDot: {
    backgroundColor: commonStyles.colors.green,
    height: 12,
    width: 12,
    borderRadius: commonStyles.sizes.radiusM,
  },
  error: {
    color: commonStyles.colors.red,
    fontSize: 15,
  },
});

export default ChatRoomItem;
