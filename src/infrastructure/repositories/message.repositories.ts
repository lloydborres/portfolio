import {
  addDoc,
  collection,
  Timestamp,
  type Firestore,
} from "firebase/firestore";
import type { ICreateMessageInput } from "@domain";

interface IMessageRepository {
  createMessage(data: ICreateMessageInput): Promise<boolean>;
}

class MessageRepository implements IMessageRepository {
  private COLLECTION_NAME = "messages";
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async createMessage(data: ICreateMessageInput): Promise<boolean> {
    try {
      await addDoc(collection(this.firestore, this.COLLECTION_NAME), {
        ...data,
        sentAt: Timestamp.now(),
        createdAt: Timestamp.now(),
      });

      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }
}

export default MessageRepository;
export type { IMessageRepository };
