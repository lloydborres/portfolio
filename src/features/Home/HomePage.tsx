import {
  CommonLayout,
  Experience,
  FeaturedProjects,
  IntroHeader,
  SkillSet,
} from "../../components";
// import profilePicImg from "../../assets/images/profile_picture.jpg";
import { useGetHomeData } from "./api";

const HomePage = () => {
  const homeData = useGetHomeData();
  const [getPerson, getSkillSets, getExperiences, getProjects] = homeData;
  const { data: personData } = getPerson;
  const { data: skillSetsData } = getSkillSets;
  const { data: experiencesData } = getExperiences;
  const { data: projectsData } = getProjects;

  const loadingProgress =
    (homeData.filter((e) => !e.isLoading).length / homeData.length) * 100;

  return (
    <CommonLayout
      name={personData?.name || ""}
      email={personData?.email}
      github={personData?.github}
      linkedin={personData?.linkedin}
      pageLoaderProgress={loadingProgress}
    >
      <IntroHeader
        name={personData?.name || ""}
        title={personData?.title || ""}
        description={personData?.description || ""}
        // profilePicSrc={profilePicImg}
        email={personData?.email}
        github={personData?.github}
        linkedin={personData?.linkedin}
      />
      {skillSetsData?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
      <Experience experiences={experiencesData} />
      <FeaturedProjects projects={projectsData} />
    </CommonLayout>
  );
};

export default HomePage;
