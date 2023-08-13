import { User } from './User';

export interface Room {
  id: string;
  name: string;
}

export interface RoomDetails extends Room {
  messages: Message[];
  user: User;
}

export interface UserRooms {
  rooms: Room[];
  user: User;
}

export interface Message {
  body: string;
  id: string;
  insertedAt: string;
  user: User;
}
