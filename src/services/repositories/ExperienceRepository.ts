import type { FirebaseApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  type Firestore,
} from "firebase/firestore";
import type { Experience } from "../../domain";
import type { IExperienceRepository } from "../interfaces";

class ExperienceRepository implements IExperienceRepository {
  private COLLECTION_NAME = "experiences";
  private firestore: Firestore;

  constructor({ firebaseApp }: { firebaseApp: FirebaseApp }) {
    this.firestore = getFirestore(firebaseApp);
  }

  async getExperiences(): Promise<Experience[]> {
    const experiencesRef = collection(this.firestore, this.COLLECTION_NAME);
    const experencesQ = query(experiencesRef, orderBy("startDate", "desc"));
    const experiencesSS = await getDocs(experencesQ);

    const experiences: Experience[] = experiencesSS.docs.map(
      (experienceDoc) => {
        const { positions, ...otherExperienceData } =
          experienceDoc.data() as Omit<Experience, "id">;
        const sortedPositions = positions.sort(
          (a, b) =>
            b.startDate.toDate().getTime() - a.startDate.toDate().getTime()
        );

        return {
          id: experienceDoc.id,
          ...otherExperienceData,
          positions: sortedPositions,
        };
      }
    ) as Experience[];

    return experiences;
  }
}

export { ExperienceRepository };
