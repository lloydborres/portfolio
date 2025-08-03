import {
  CommonLayout,
  Experience,
  FeaturedProjects,
  IntroHeader,
  SkillSet,
} from "@components";
import useGetHomeData from "./api/useGetHomeData";

const HomePage = () => {
  const { data: homeData, isLoading: homeDataIsLoading } = useGetHomeData();

  return (
    <CommonLayout
      name={homeData?.name || ""}
      email={homeData?.email}
      github={homeData?.github}
      linkedin={homeData?.linkedin}
      pageLoaderProgress={homeDataIsLoading ? 0 : 100}
    >
      <IntroHeader
        name={homeData?.name || ""}
        title={homeData?.title || ""}
        description={homeData?.description || ""}
        // profilePicSrc={profilePicImg}
        email={homeData?.email}
        github={homeData?.github}
        linkedin={homeData?.linkedin}
      />
      {homeData?.skillSets?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
      <Experience experiences={homeData?.experiences} />
      <FeaturedProjects projects={homeData?.projects} />
    </CommonLayout>
  );
};

export default HomePage;
