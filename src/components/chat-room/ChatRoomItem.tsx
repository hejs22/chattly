import { View, Text, StyleSheet } from 'react-native';

import Skeleton from '../../primitives/Skeleton';
import useRoomDetails from '../../shared/hooks/useRoomDetails';
import {
  calculateHowMuchTimePassedSince,
  parseTimeInSecondsToStringExpression,
} from '../../shared/utils/timeUtils';
import { Room, RoomDetails } from '../../types/Chat';
import UserPicture from '../user/UserPicture';

interface ChatRoomItemProps {
  room: Room;
}

const IS_NEW_TIME_THRESHOLD_IN_SECONDS = 60;

const ChatRoomItem = ({ room }: ChatRoomItemProps) => {
  const { data, loading, error } = useRoomDetails(room.id);

  if (loading) {
    return <Skeleton />;
  }

  if (!data || error) {
    return (
      <View style={styles.container}>
        <Text numberOfLines={1} style={[styles.error]}>
          Failed to load chat room "{room.name}"
        </Text>
      </View>
    );
  }

  const extractDataFromQueryResult = (roomDetails: RoomDetails) => {
    const lastMessage = roomDetails.messages[0];
    const lastMessageBody = lastMessage.body ?? 'Say "hi" to your new friend!';
    const lastMessageTime = lastMessage.insertedAt;
    const secondsSinceLastMessage = calculateHowMuchTimePassedSince(new Date(lastMessageTime));
    const isNew = secondsSinceLastMessage < IS_NEW_TIME_THRESHOLD_IN_SECONDS;

    return { lastMessage, isNew, lastMessageBody, secondsSinceLastMessage };
  };

  const { lastMessage, isNew, lastMessageBody, secondsSinceLastMessage } =
    extractDataFromQueryResult(data);

  return (
    <View style={[styles.container, isNew && styles.highlighted]}>
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
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    gap: 15,
    fontFamily: 'Regular',
  },
  highlighted: {
    backgroundColor: '#5603AD',
  },
  highlightedText: {
    color: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
  },
  text: {
    overflow: 'hidden',
    maxWidth: '80%',
    color: '#1F1F1F',
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
    color: '#9FA2B2',
    alignSelf: 'flex-end',
  },
  isActiveDot: {
    backgroundColor: '#A8FF76',
    height: 12,
    width: 12,
    borderRadius: 12,
  },
  error: {
    color: '#C60048',
    fontSize: 15,
  },
});

export default ChatRoomItem;
