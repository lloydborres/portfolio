import { portfolioData } from '../../constants';
import { CommonLayout, Experience, IntroHeader, SkillSet } from '../../components';

const HomePage = () => {
  const {
    name,
    title,
    description,
    profilePicSrc,
    urls: { github, linkedin },
    skillSets,
    experiences,
  } = portfolioData;

  const handleGitHubIconClick = () => {
    window.open(github, '_blank');
  };

  const handleLinkedInIconClick = () => {
    window.open(linkedin, '_blank');
  };

  return (
    <CommonLayout>
      <IntroHeader
        name={name}
        title={title}
        description={description}
        profilePicSrc={profilePicSrc}
        onGitHubIconClick={handleGitHubIconClick}
        onLinkedInIconClick={handleLinkedInIconClick}
      />
      {skillSets.map((skillSetItem, index) => (
        <SkillSet key={index} title={skillSetItem.title} skillCards={skillSetItem.skills} />
      ))}
      <Experience experiences={experiences} />
    </CommonLayout>
  );
};

export default HomePage;
