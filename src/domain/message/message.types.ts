import type { Timestamp } from "firebase/firestore";

interface IMessage {
  id: string;
  name: string;
  message: string;
  email?: string;
  createdAt: Timestamp;
}

interface ICreateMessageInput {
  name: string;
  message: string;
  email?: string;
}

export type { IMessage, ICreateMessageInput };
