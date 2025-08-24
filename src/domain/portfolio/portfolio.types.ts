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

interface ISkillSetSkill {
  label: string;
  skillImgSrc?: string;
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
}

interface IPortfolioFeaturedItems {
  skillSets: ({
    skills: ISkillSetSkill[];
  } & Omit<ISkillSet, "skills">)[];
  experiences: IExperience[];
  projects: IProject[];
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

export type {
  IPortfolio,
  ISkillSetSkill,
  ISkillSet,
  IPosition,
  IExperience,
  IProject,
  IPortfolioFeaturedItems,
  IGetPortfolioProjectsInput,
  ILikeProjectInput,
};
