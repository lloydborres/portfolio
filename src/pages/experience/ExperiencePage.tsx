import { HomeLayout, Section, Experience, SkillSet } from "@components";
import useGetHome from "../home/api/useGetHome";

const ExperiencePage = () => {
  const { userDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: userDetailsData, isPending: userDetailsIsPending } =
    userDetailsQuery;
  const { data: featuredItemsData, isPending: featuredItemsIsPending } =
    featuredItemsQuery;

  return (
    <HomeLayout
      userDetails={{
        name: userDetailsData?.name,
        title: userDetailsData?.title,
        profilePicUrl: userDetailsData?.profilePicSrc,
        githubUrl: userDetailsData?.github,
        linkedInUrl: userDetailsData?.linkedin,
        email: userDetailsData?.email,
        location: userDetailsData?.location,
      }}
      appBarTitle="Experience"
      menuActiveItem="experience"
      pageLoaderProgress={
        userDetailsIsPending || featuredItemsIsPending ? 0 : 100
      }
    >
      <Section header="About">{userDetailsData?.description}</Section>
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
