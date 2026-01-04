import type { OrderByDirection, Timestamp } from "firebase/firestore";

interface IPortfolio {
  id: string;
  name: string;
  title: string;
  description: string;
  profilePicSrc?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  location?: string;
}

interface ISkillSet {
  id: string;
  title: string;
  skills: string[];
}

interface IPosition {
  title: string;
  location: string;
  description: string;
  startDate: Timestamp;
  endDate?: Timestamp;
}

interface IExperience {
  id: string;
  companyName: string;
  positions: IPosition[];
}

interface IProjectDetail {
  id: string;
  label: string;
  content: string;
  order: number;
}

interface IProject {
  id: string;
  title: string;
  description: string;
  coverImg?: string;
  tags?: string[];
  likes?: number;
  links?: {
    label: string;
    url?: string;
    isExternal?: boolean;
  }[];
  isFeatured?: boolean;
  projectDetails?: IProjectDetail[];
}

interface IPortfolioFeaturedItems {
  projects: IProject[];
}

interface IPortfolioExperienceItems {
  skillSets: ISkillSet[];
  experiences: IExperience[];
}

interface IGetPortfolioProjectsInput {
  portfolioId: string;
  filters?: {
    isFeatured?: boolean;
    orderBy?: string;
    orderByDirection?: OrderByDirection;
  };
}

interface ILikeProjectInput {
  portfolioId: string;
  projectId: string;
}

interface IGetProjectDetailsByIdInput {
  portfolioId: string;
  projectId: string;
}

export type {
  IPortfolio,
  ISkillSet,
  IPosition,
  IExperience,
  IProject,
  IProjectDetail,
  IPortfolioFeaturedItems,
  IPortfolioExperienceItems,
  IGetPortfolioProjectsInput,
  ILikeProjectInput,
  IGetProjectDetailsByIdInput,
};
