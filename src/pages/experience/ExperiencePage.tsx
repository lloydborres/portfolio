import { HomeLayout, Experience, SkillSet } from "@components";
import { skillNameToSkillCardProps } from "@utils";
import useGetExperience from "./api/useGetExperience";

const ExperiencePage = () => {
  const { portfolioDetailsQuery, experienceItemsQuery } = useGetExperience();
  const { data: portfolioDetailsData, isPending: portfolioDetailsPending } =
    portfolioDetailsQuery;
  const { data: experienceItemsData, isPending: experienceItemsIsPending } =
    experienceItemsQuery;

  const experienceItemsNotReady =
    portfolioDetailsPending || experienceItemsIsPending;

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
    >
      <Experience
        experiences={
          experienceItemsNotReady
            ? Array.from({ length: 1 }).map((_e, idx) => ({
                id: idx.toString(),
                positions: [{}],
              }))
            : experienceItemsData?.experiences
        }
      />
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
