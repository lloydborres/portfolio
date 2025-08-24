import { HomeLayout, Section, Experience, SkillSet } from "@components";
import useGetHome from "../home/api/useGetHome";

const ExperiencePage = () => {
  const { portfolioDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: portfolioDetailsData, isPending: portfolioDetailsIsPending } =
    portfolioDetailsQuery;
  const { data: featuredItemsData, isPending: featuredItemsIsPending } =
    featuredItemsQuery;

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
        portfolioDetailsIsPending || featuredItemsIsPending ? 0 : 100
      }
    >
      <Section header="About">{portfolioDetailsData?.description}</Section>
      <Experience experiences={featuredItemsData?.experiences} />
      {featuredItemsData?.skillSets?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
    </HomeLayout>
  );
};

export default ExperiencePage;
