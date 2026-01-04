import type { IPortfolioRepository } from "@infrastructure";
import type {
  ILikeProjectInput,
  IProject,
  IPortfolio,
  IPortfolioFeaturedItems,
  IPortfolioExperienceItems,
  IGetProjectDetailsByIdInput,
} from "./portfolio.types";

interface IPortfolioService {
  getPortfolioDetails(): Promise<IPortfolio | undefined>;
  getPortfolioFeaturedItems(
    portfolioId: string,
  ): Promise<IPortfolioFeaturedItems>;
  getPortfolioExperienceItems(
    portfolioId: string,
  ): Promise<IPortfolioExperienceItems>;
  getPortfolioProjects(portfolioId: string): Promise<IProject[]>;
  likeProject(data: ILikeProjectInput): Promise<boolean>;
  getProjectDetailsById(
    data: IGetProjectDetailsByIdInput,
  ): Promise<IProject | undefined>;
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
    portfolioId: string,
  ): Promise<IPortfolioFeaturedItems> {
    const projects = await this.PortfolioRepository.getPortfolioProjects({
      filters: {
        isFeatured: true,
        orderBy: "likes",
        orderByDirection: "desc",
      },
      portfolioId,
    });

    return {
      projects,
    };
  }

  async getPortfolioExperienceItems(
    portfolioId: string,
  ): Promise<IPortfolioExperienceItems> {
    const experiences =
      await this.PortfolioRepository.getPortfolioExperiences(portfolioId);
    const remappedExperiences = experiences.map((experience) => {
      const sortedPositions = experience.positions.sort(
        (a, b) =>
          b.startDate.toDate().getTime() - a.startDate.toDate().getTime(),
      );
      return {
        ...experience,
        positions: sortedPositions,
      };
    });

    const skillSets =
      await this.PortfolioRepository.getPortfolioSkillSets(portfolioId);

    return {
      experiences: remappedExperiences,
      skillSets,
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

  getProjectDetailsById(
    data: IGetProjectDetailsByIdInput,
  ): Promise<IProject | undefined> {
    return this.PortfolioRepository.getProjectDetailsById(data);
  }
}

export default PortfolioService;
export type { IPortfolioService };
