import { portfolioData } from "../../constants";
import {
  CommonLayout,
  Experience,
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
    </CommonLayout>
  );
};

export default HomePage;
