import { useQueries } from "@tanstack/react-query";
import { firebaseProvider } from "../../../services";
import {
  SKILL_LOOKUP,
  type SkillLookupKey,
} from "../../../constants/skillLookup";

const getPerson = () => {
  return firebaseProvider().personRepository.getPerson();
};

const getSkillSets = async () => {
  const results = await firebaseProvider().skillSetRepository.getSkillSets();

  const skillSets = results.map((skillSet) => {
    const skills = skillSet.skills.map((skill) => {
      return SKILL_LOOKUP[skill as SkillLookupKey];
    });

    return {
      ...skillSet,
      skills,
    };
  });

  return skillSets;
};

const getExperiences = () => {
  return firebaseProvider().experienceRepository.getExperiences();
};

const getProjects = () => {
  return firebaseProvider().projectRepository.getProjects();
};

const useGetHomeData = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: ["getPerson"],
        queryFn: getPerson,
      },
      {
        queryKey: ["getSkillSets"],
        queryFn: getSkillSets,
      },
      {
        queryKey: ["getExperiences"],
        queryFn: getExperiences,
      },
      {
        queryKey: ["getProjects"],
        queryFn: getProjects,
      },
    ],
  });

  return queries;
};

export { useGetHomeData };
