import type { Timestamp } from "firebase/firestore";

interface IUser {
  id: string;
  name: string;
  title: string;
  description: string;
  profilePicSrc?: string;
  email?: string;
  github?: string;
  linkedin?: string;
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

interface IProjectAction {
  label: string;
  href?: string;
  isExternal?: boolean;
}

interface IProject {
  id: string;
  title: string;
  description: string;
  coverImg?: string;
  likes?: number;
  actions?: IProjectAction[];
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
  IProjectAction,
  IProject,
  IUserFeaturedItems,
  IGetUserProjectsInput,
  ILikeProjectInput,
};
