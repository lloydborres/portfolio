import type { SkillSet } from "../../domain";

interface ISkillSetRepository {
  getSkillSets(): Promise<SkillSet[]>;
}

export type { ISkillSetRepository };
