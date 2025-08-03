import {
  collection,
  query,
  limit,
  getDocs,
  type Firestore,
} from "firebase/firestore";
import { UserEntity, type IUser } from "@domain";

interface IUserRepository {
  getFirstUser(): Promise<IUser | undefined>;
}

class UserRepository implements IUserRepository {
  private COLLECTION_NAME = "users";
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getFirstUser(): Promise<IUser | undefined> {
    const usersRef = collection(this.firestore, this.COLLECTION_NAME);
    const usersQ = query(usersRef, limit(1));
    const usersSS = await getDocs(usersQ);

    if (!usersSS.empty) {
      const userDoc = usersSS.docs[0];
      const { name, description, title, email, github, linkedin } =
        userDoc.data();

      const user = new UserEntity({
        id: userDoc.id,
        name,
        description,
        title,
        email,
        github,
        linkedin,
      }).toObject();

      return user;
    }
  }
}

export default UserRepository;
export type { IUserRepository };
