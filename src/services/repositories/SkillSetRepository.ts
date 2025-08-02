import type { FirebaseApp } from "firebase/app";
import {
  collection,
  Firestore,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import type { SkillSet } from "../../domain";
import type { ISkillSetRepository } from "../interfaces";

class SkillSetRepository implements ISkillSetRepository {
  private COLLECTION_NAME = "skillSets";
  private firestore: Firestore;

  constructor({ firebaseApp }: { firebaseApp: FirebaseApp }) {
    this.firestore = getFirestore(firebaseApp);
  }

  async getSkillSets(): Promise<SkillSet[]> {
    const skillSetsRef = collection(this.firestore, this.COLLECTION_NAME);
    const snapshots = await getDocs(skillSetsRef);

    const skillSets: SkillSet[] = snapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as SkillSet[];

    return skillSets;
  }
}

export { SkillSetRepository };
