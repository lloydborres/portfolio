import type { OrderByDirection, Timestamp } from "firebase/firestore";

interface IUser {
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
  actions?: {
    label: string;
    href?: string;
    isExternal?: boolean;
  }[];
  moreDetails?: string;
  isFeatured?: boolean;
}

interface IUserFeaturedItems {
  skillSets: ({
    skills: ISkillSetSkill[];
  } & Omit<ISkillSet, "skills">)[];
  experiences: IExperience[];
  projects: IProject[];
}

interface IGetUserProjectsInput {
  userId: string;
  filters?: {
    isFeatured?: boolean;
    orderBy?: string;
    orderByDirection?: OrderByDirection;
  };
}

interface ILikeProjectInput {
  userId: string;
  projectId: string;
}

export type {
  IUser,
  ISkillSetSkill,
  ISkillSet,
  IPosition,
  IExperience,
  IProject,
  IUserFeaturedItems,
  IGetUserProjectsInput,
  ILikeProjectInput,
};
