import { IMessage } from 'react-native-gifted-chat';

import { Message } from '../../types/Chat';
import { User } from '../../types/User';

class MessagesMapper {
  oneToGiftedChatFormat = (message: Message): IMessage => {
    return {
      _id: message.id,
      text: message.body,
      createdAt: new Date(message.insertedAt),
      user: {
        _id: message.user.id,
        name: message.user.lastName.concat(' ', message.user.lastName),
      },
    };
  };

  manyToGiftedChatFormat = (messages: Message[]): IMessage[] => {
    return messages.map((message) => {
      return this.oneToGiftedChatFormat(message);
    });
  };
}

export const GiftedMessageMapper = new MessagesMapper();

export const extractOtherUserDataFromMessages = (messages: Message[], you: User): User | null => {
  const filteredMessages = messages.filter((message) => message.user.id !== you.id);
  return filteredMessages[0]?.user ?? null;
};

export const parseMaybeUserToString = (user: User | null) => {
  if (user) {
    return `${user.firstName} ${user.lastName}`;
  } else {
    return 'Unknown user';
  }
};
