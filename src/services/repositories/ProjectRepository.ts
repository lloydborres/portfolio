import type { FirebaseApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  type Firestore,
} from "firebase/firestore";
import type { Project } from "../../domain";
import type { IProjectRepository } from "../interfaces";

class ProjectRepository implements IProjectRepository {
  private COLLECTION_NAME = "projects";
  private firestore: Firestore;

  constructor({ firebaseApp }: { firebaseApp: FirebaseApp }) {
    this.firestore = getFirestore(firebaseApp);
  }

  async getProjects(): Promise<Project[]> {
    const projectsRef = collection(this.firestore, this.COLLECTION_NAME);
    const projectsSS = await getDocs(projectsRef);

    const projects: Project[] = projectsSS.docs.map((projectDoc) => {
      return {
        id: projectDoc.id,
        ...projectDoc.data(),
      };
    }) as Project[];

    return projects;
  }
}

export { ProjectRepository };
