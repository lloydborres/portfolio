import {
  collection,
  query,
  limit,
  getDocs,
  type Firestore,
  orderBy,
  where,
  doc,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";
import {
  type IExperience,
  type IProject,
  type ISkillSet,
  type IPortfolio,
  type IGetPortfolioProjectsInput,
  type ILikeProjectInput,
} from "@domain";

interface IPortfolioRepository {
  getFirstPortfolio(): Promise<IPortfolio | undefined>;
  getPortfolioById(id: string): Promise<IPortfolio | undefined>;
  getPortfolioSkillSets(id: string): Promise<ISkillSet[]>;
  getPortfolioExperiences(id: string): Promise<IExperience[]>;
  getPortfolioProjects(data: IGetPortfolioProjectsInput): Promise<IProject[]>;
  likeProject(data: ILikeProjectInput): Promise<boolean>;
}

class PortfolioRepository implements IPortfolioRepository {
  private COLLECTION_NAME = "portfolios";
  private SUB_COLLECTION_SKILL_SETS = "skillSets";
  private SUB_COLLECTION_EXPERIENCES = "experiences";
  private SUB_COLLECTION_PROJECTS = "projects";
  private firestore: Firestore;

  constructor(firestore: Firestore) {
    this.firestore = firestore;
  }

  async getFirstPortfolio(): Promise<IPortfolio | undefined> {
    const portfoliosRef = collection(this.firestore, this.COLLECTION_NAME);
    const portfoliosQ = query(portfoliosRef, limit(1));
    const portfoliosSS = await getDocs(portfoliosQ);

    if (!portfoliosSS.empty) {
      const portfolioDoc = portfoliosSS.docs[0];

      return {
        id: portfolioDoc.id,
        ...portfolioDoc.data(),
      } as IPortfolio;
    }
  }

  async getPortfolioById(id: string): Promise<IPortfolio | undefined> {
    try {
      const portfolioRef = doc(this.firestore, this.COLLECTION_NAME, id);
      const portfolioDoc = await getDoc(portfolioRef);

      return {
        id: portfolioDoc.id,
        ...portfolioDoc.data(),
      } as IPortfolio;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  async getPortfolioSkillSets(id: string): Promise<ISkillSet[]> {
    try {
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
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getPortfolioExperiences(id: string): Promise<IExperience[]> {
    try {
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
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async getPortfolioProjects(
    data: IGetPortfolioProjectsInput
  ): Promise<IProject[]> {
    try {
      const { portfolioId, filters } = data;
      const projectsRef = collection(
        this.firestore,
        this.COLLECTION_NAME,
        portfolioId,
        this.SUB_COLLECTION_PROJECTS
      );

      const projectConstraints = [];
      if (filters?.isFeatured)
        projectConstraints.push(where("isFeatured", "==", filters.isFeatured));
      if (filters?.orderBy)
        projectConstraints.push(
          orderBy(filters.orderBy, filters.orderByDirection)
        );

      const projectsQ = query(projectsRef, ...projectConstraints);
      const projectsSS = await getDocs(projectsQ);

      const projects: IProject[] = projectsSS.docs.map((projectDoc) => {
        return {
          id: projectDoc.id,
          ...projectDoc.data(),
        } as IProject;
      });

      return projects;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return [];
    }
  }

  async likeProject(data: ILikeProjectInput): Promise<boolean> {
    try {
      const { portfolioId, projectId } = data;
      const projectDocRef = doc(
        this.firestore,
        this.COLLECTION_NAME,
        portfolioId,
        this.SUB_COLLECTION_PROJECTS,
        projectId
      );
      await updateDoc(projectDocRef, {
        likes: increment(1),
      });
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }
}

export default PortfolioRepository;
export type { IPortfolioRepository };
