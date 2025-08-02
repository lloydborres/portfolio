import type { Experience } from "../../domain";

interface IExperienceRepository {
  getExperiences(): Promise<Experience[]>;
}

export type { IExperienceRepository };
