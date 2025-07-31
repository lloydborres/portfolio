import { portfolioData } from "../../constants";
import {
  CommonLayout,
  Experience,
  FeaturedProjects,
  IntroHeader,
  SkillSet,
} from "../../components";

const HomePage = () => {
  const {
    name,
    title,
    description,
    profilePicSrc,
    urls: { email, github, linkedin },
    skillSets,
    experiences,
    projects,
  } = portfolioData;

  return (
    <CommonLayout>
      <IntroHeader
        name={name}
        title={title}
        description={description}
        profilePicSrc={profilePicSrc}
        email={email}
        github={github}
        linkedin={linkedin}
      />
      {skillSets.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
      <Experience experiences={experiences} />
      <FeaturedProjects projects={projects} />
    </CommonLayout>
  );
};

export default HomePage;
