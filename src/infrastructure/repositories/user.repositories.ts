import {
  collection,
  query,
  limit,
  getDocs,
  type Firestore,
  orderBy,
  where,
} from "firebase/firestore";
import {
  type IExperience,
  type IProject,
  type ISkillSet,
  type IUser,
  type IGetUserProjectsInput,
} from "@domain";

interface IUserRepository {
  getFirstUser(): Promise<IUser | undefined>;
  getUserSkillSets(id: string): Promise<ISkillSet[]>;
  getUserExperiences(id: string): Promise<IExperience[]>;
  getUserProjects(data: IGetUserProjectsInput): Promise<IProject[]>;
}

class UserRepository implements IUserRepository {
  private COLLECTION_NAME = "users";
  private SUB_COLLECTION_SKILL_SETS = "skillSets";
  private SUB_COLLECTION_EXPERIENCES = "experiences";
  private SUB_COLLECTION_PROJECTS = "projects";
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

      return {
        id: userDoc.id,
        ...userDoc.data(),
      } as IUser;
    }
  }

  async getUserSkillSets(id: string): Promise<ISkillSet[]> {
    const skillSetsRef = collection(
      this.firestore,
      this.COLLECTION_NAME,
      id,
      this.SUB_COLLECTION_SKILL_SETS
    );
    const skillSetsSS = await getDocs(skillSetsRef);

    const skillSets: ISkillSet[] = skillSetsSS.docs.map((skillSetDoc) => {
      return {
        id: skillSetDoc.id,
        ...skillSetDoc.data(),
      } as ISkillSet;
    });

    return skillSets;
  }

  async getUserExperiences(id: string): Promise<IExperience[]> {
    const experiencesRef = collection(
      this.firestore,
      this.COLLECTION_NAME,
      id,
      this.SUB_COLLECTION_EXPERIENCES
    );
    const experiencesQ = query(experiencesRef, orderBy("startDate", "desc"));
    const experiencesSS = await getDocs(experiencesQ);

    const experiences: IExperience[] = experiencesSS.docs.map(
      (experienceDoc) => {
        return {
          id: experienceDoc.id,
          ...experienceDoc.data(),
        } as IExperience;
      }
    );

    return experiences;
  }

  async getUserProjects(data: IGetUserProjectsInput): Promise<IProject[]> {
    const { userId, filters } = data;
    const projectsRef = collection(
      this.firestore,
      this.COLLECTION_NAME,
      userId,
      this.SUB_COLLECTION_PROJECTS
    );

    const projectConstraints = [];
    if (filters?.isFeatured)
      projectConstraints.push(where("isFeatured", "==", filters.isFeatured));

    const projectsQ = query(projectsRef, ...projectConstraints);
    const projectsSS = await getDocs(projectsQ);

    const projects: IProject[] = projectsSS.docs.map((projectDoc) => {
      return {
        id: projectDoc.id,
        ...projectDoc.data(),
      } as IProject;
    });

    return projects;
  }
}

export default UserRepository;
export type { IUserRepository };
