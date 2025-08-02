import { firebaseApp } from "./firebase";
import type {
  IExperienceRepository,
  IPersonRepository,
  IProjectRepository,
  ISkillSetRepository,
} from "./interfaces";
import {
  ExperienceRepository,
  PersonRepository,
  ProjectRepository,
  SkillSetRepository,
} from "./repositories";

const firebaseProvider = () => {
  const personRepository: IPersonRepository = new PersonRepository({
    firebaseApp,
  });
  const skillSetRepository: ISkillSetRepository = new SkillSetRepository({
    firebaseApp,
  });
  const experienceRepository: IExperienceRepository = new ExperienceRepository({
    firebaseApp,
  });
  const projectRepository: IProjectRepository = new ProjectRepository({
    firebaseApp,
  });

  return {
    personRepository,
    skillSetRepository,
    experienceRepository,
    projectRepository,
  };
};

export { firebaseProvider };
