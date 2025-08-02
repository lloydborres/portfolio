import type { BaseModel } from "./BaseModel";

interface ProjectAction {
  label: string;
  href?: string;
  isExternal?: boolean;
}

interface Project extends BaseModel {
  title: string;
  description: string;
  coverImg?: string;
  actions?: ProjectAction[];
}

export type { ProjectAction, Project };
