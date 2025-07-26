import React from "react";
import { AppBar, Footer } from "../../molecules";
import { portfolioData } from "../../../constants";
import { Container, Content } from "./elements";

type Props = {
  children?: React.ReactNode;
};

const CommonLayout = ({ children }: Props) => {
  const {
    name,
    urls: { email, github, linkedin },
  } = portfolioData;

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailIconClick = () => {
    window.open(email);
  };

  const handleGitHubIconClick = () => {
    window.open(github, "_blank");
  };

  const handleLinkedInIconClick = () => {
    window.open(linkedin, "_blank");
  };

  return (
    <Container>
      <AppBar title="Portfolio" onTitleClick={handleTitleClick} />
      <Content>{children}</Content>
      <Footer
        name={name}
        onEmailIconClick={handleEmailIconClick}
        onGitHubIconClick={handleGitHubIconClick}
        onLinkedInIconClick={handleLinkedInIconClick}
      />
    </Container>
  );
};

export default CommonLayout;
