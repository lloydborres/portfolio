import type { IPortfolioRepository } from "@infrastructure";
import { SKILL_LOOKUP, type SkillLookupKey } from "@constants";
import type {
  ILikeProjectInput,
  IProject,
  IPortfolio,
  IPortfolioFeaturedItems,
} from "./portfolio.types";

interface IPortfolioService {
  getPortfolioDetails(): Promise<IPortfolio | undefined>;
  getPortfolioFeaturedItems(
    portfolioId: string
  ): Promise<IPortfolioFeaturedItems>;
  getPortfolioProjects(portfolioId: string): Promise<IProject[]>;
  likeProject(data: ILikeProjectInput): Promise<boolean>;
}

class PortfolioService implements IPortfolioService {
  private PortfolioRepository: IPortfolioRepository;

  constructor(PortfolioRepository: IPortfolioRepository) {
    this.PortfolioRepository = PortfolioRepository;
  }

  async getPortfolioDetails(): Promise<IPortfolio | undefined> {
    const portfolio = await this.PortfolioRepository.getPortfolioById("v3");

    if (portfolio) return portfolio;
  }

  async getPortfolioFeaturedItems(
    portfolioId: string
  ): Promise<IPortfolioFeaturedItems> {
    const skillSets = await this.PortfolioRepository.getPortfolioSkillSets(
      portfolioId
    );
    const remappedSkillSets = skillSets.map((skillSet) => {
      const remappedSkills = skillSet.skills.map(
        (skill) => SKILL_LOOKUP[skill as SkillLookupKey]
      );
      return {
        ...skillSet,
        skills: remappedSkills,
      };
    });

    const experiences = await this.PortfolioRepository.getPortfolioExperiences(
      portfolioId
    );
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
    const projects = await this.PortfolioRepository.getPortfolioProjects({
      filters: {
        isFeatured: true,
        orderBy: "likes",
        orderByDirection: "desc",
      },
      portfolioId,
    });

    return {
      skillSets: remappedSkillSets,
      experiences: remappedExperiences,
      projects,
    };
  }

  getPortfolioProjects(portfolioId: string): Promise<IProject[]> {
    return this.PortfolioRepository.getPortfolioProjects({
      filters: {
        orderBy: "startDate",
        orderByDirection: "desc",
      },
      portfolioId,
    });
  }

  likeProject(data: ILikeProjectInput): Promise<boolean> {
    return this.PortfolioRepository.likeProject(data);
  }
}

export default PortfolioService;
export type { IPortfolioService };
