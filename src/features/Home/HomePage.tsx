import {
  CommonLayout,
  // Experience,
  // FeaturedProjects,
  IntroHeader,
  // SkillSet,
} from "@components";
// import profilePicImg from "../../assets/images/profile_picture.jpg";
import { useGetHomeData } from "./api";

const HomePage = () => {
  const homeData = useGetHomeData();
  const [
    getUser,
    // getSkillSets,
    // getExperiences,
    // getProjects
  ] = homeData;
  const { data: userData } = getUser;
  // const { data: skillSetsData } = getSkillSets;
  // const { data: experiencesData } = getExperiences;
  // const { data: projectsData } = getProjects;

  const loadingProgress =
    (homeData.filter((e) => !e.isLoading).length / homeData.length) * 100;

  return (
    <CommonLayout
      name={userData?.name || ""}
      email={userData?.email}
      github={userData?.github}
      linkedin={userData?.linkedin}
      pageLoaderProgress={loadingProgress}
    >
      <IntroHeader
        name={userData?.name || ""}
        title={userData?.title || ""}
        description={userData?.description || ""}
        // profilePicSrc={profilePicImg}
        email={userData?.email}
        github={userData?.github}
        linkedin={userData?.linkedin}
      />
      {/* {skillSetsData?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
      <Experience experiences={experiencesData} />
      <FeaturedProjects projects={projectsData} /> */}
    </CommonLayout>
  );
};

export default HomePage;
