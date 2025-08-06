import {
  CommonLayout,
  Experience,
  FeaturedProjects,
  IntroHeader,
  SkillSet,
} from "@components";
import useGetHome from "./api/useGetHome";

const HomePage = () => {
  const { userDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: userDetailsData, isLoading: userDetailsIsLoading } =
    userDetailsQuery;
  const { data: featuredItemsData, isLoading: featuredItemsIsLoading } =
    featuredItemsQuery;

  return (
    <CommonLayout
      name={userDetailsData?.name || ""}
      email={userDetailsData?.email}
      github={userDetailsData?.github}
      linkedin={userDetailsData?.linkedin}
      pageLoaderProgress={
        userDetailsIsLoading && featuredItemsIsLoading ? 0 : 100
      }
    >
      <IntroHeader userDetails={userDetailsData} />
      {featuredItemsData?.skillSets?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
      <Experience experiences={featuredItemsData?.experiences} />
      <FeaturedProjects projects={featuredItemsData?.projects} />
    </CommonLayout>
  );
};

export default HomePage;
