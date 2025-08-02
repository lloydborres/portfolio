import type { FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  limit,
  getDocs,
  type Firestore,
} from "firebase/firestore";
import type { IPersonRepository } from "../interfaces";
import type { Person } from "../../domain";

class PersonRepository implements IPersonRepository {
  private COLLECTION_NAME = "person";
  private firestore: Firestore;

  constructor({ firebaseApp }: { firebaseApp: FirebaseApp }) {
    this.firestore = getFirestore(firebaseApp);
  }

  async getPerson(): Promise<Person | undefined> {
    const personRef = collection(this.firestore, this.COLLECTION_NAME);
    const q = query(personRef, limit(1));
    const snapshots = await getDocs(q);

    if (!snapshots.empty) return snapshots.docs[0].data() as Person;
  }
}

export { PersonRepository };
