import type { Project } from "../../domain";

interface IProjectRepository {
  getProjects(): Promise<Project[]>;
}

export type { IProjectRepository };
