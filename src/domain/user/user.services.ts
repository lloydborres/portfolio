import type { IUserRepository } from "@infrastructure";
import { SKILL_LOOKUP, type SkillLookupKey } from "@constants";
import type { IUserDetails } from "./user.types";

interface IUserService {
  getUserDetails(): Promise<IUserDetails | undefined>;
}

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getUserDetails(): Promise<IUserDetails | undefined> {
    const user = await this.userRepository.getFirstUser();

    if (user) {
      const { id: userId } = user;

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
      const projects = await this.userRepository.getUserProjects(userId);

      return {
        ...user,
        skillSets: remappedSkillSets,
        experiences: remappedExperiences,
        projects,
      };
    }
  }
}

export default UserService;
export type { IUserService };
