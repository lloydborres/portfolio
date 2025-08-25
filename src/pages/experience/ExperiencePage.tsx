import { HomeLayout, Section, Experience, SkillSet } from "@components";
import { skillNameToSkillCardProps } from "@utils";
import useGetExperience from "./api/useGetExperience";

const ExperiencePage = () => {
  const { portfolioDetailsQuery, experienceItemsQuery } = useGetExperience();
  const { data: portfolioDetailsData, isPending: portfolioDetailsIsPending } =
    portfolioDetailsQuery;
  const { data: experienceItemsData, isPending: experienceItemsIsPending } =
    experienceItemsQuery;

  return (
    <HomeLayout
      userDetails={{
        name: portfolioDetailsData?.name,
        title: portfolioDetailsData?.title,
        profilePicUrl: portfolioDetailsData?.profilePicSrc,
        githubUrl: portfolioDetailsData?.github,
        linkedInUrl: portfolioDetailsData?.linkedin,
        email: portfolioDetailsData?.email,
        location: portfolioDetailsData?.location,
      }}
      appBarTitle="Experience"
      menuActiveItem="experience"
      pageLoaderProgress={
        portfolioDetailsIsPending || experienceItemsIsPending ? 0 : 100
      }
    >
      <Section header="About">{portfolioDetailsData?.description}</Section>
      <Experience experiences={experienceItemsData?.experiences} />
      {experienceItemsData?.skillSets?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills.map((skill) =>
            skillNameToSkillCardProps(skill)
          )}
        />
      ))}
    </HomeLayout>
  );
};

export default ExperiencePage;
