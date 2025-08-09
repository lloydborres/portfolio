import type { IUserRepository } from "@infrastructure";
import { SKILL_LOOKUP, type SkillLookupKey } from "@constants";
import type {
  ILikeProjectInput,
  IProject,
  IUser,
  IUserFeaturedItems,
} from "./user.types";

interface IUserService {
  getUserDetails(): Promise<IUser | undefined>;
  getUserFeaturedItems(userId: string): Promise<IUserFeaturedItems>;
  getUserProjects(userId: string): Promise<IProject[]>;
  likeProject(data: ILikeProjectInput): Promise<boolean>;
}

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUserDetails(): Promise<IUser | undefined> {
    const user = await this.userRepository.getFirstUser();

    if (user) return user;
  }

  async getUserFeaturedItems(userId: string): Promise<IUserFeaturedItems> {
    const skillSets = await this.userRepository.getUserSkillSets(userId);
    const remappedSkillSets = skillSets.map((skillSet) => {
      const remappedSkills = skillSet.skills.map(
        (skill) => SKILL_LOOKUP[skill as SkillLookupKey]
      );
      return {
        ...skillSet,
        skills: remappedSkills,
      };
    });

    const experiences = await this.userRepository.getUserExperiences(userId);
    const remappedExperiences = experiences.map((experience) => {
      const sortedPositions = experience.positions.sort(
        (a, b) =>
          b.startDate.toDate().getTime() - a.startDate.toDate().getTime()
      );
      return {
        ...experience,
        positions: sortedPositions,
      };
    });
    const projects = await this.userRepository.getUserProjects({
      filters: {
        isFeatured: true,
        orderBy: "likes",
        orderByDirection: "desc",
      },
      userId,
    });

    return {
      skillSets: remappedSkillSets,
      experiences: remappedExperiences,
      projects,
    };
  }

  getUserProjects(userId: string): Promise<IProject[]> {
    return this.userRepository.getUserProjects({
      filters: {
        orderBy: "startDate",
        orderByDirection: "desc",
      },
      userId,
    });
  }

  likeProject(data: ILikeProjectInput): Promise<boolean> {
    return this.userRepository.likeProject(data);
  }
}

export default UserService;
export type { IUserService };
