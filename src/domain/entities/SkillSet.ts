import type { BaseModel } from "./BaseModel";

interface SkillSet extends BaseModel {
  title: string;
  skills: string[];
}

export type { SkillSet };
