import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Zoom, Fab } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import { AppBar, Footer, PageLoader } from "@components";
import { NAV_PATHS } from "@constants";
import { Container, Content } from "./CommonLayout.styles";

type Props = {
  name: string;
  email?: string;
  github?: string;
  linkedin?: string;
  children?: React.ReactNode;
  pageLoaderProgress?: number;
};

const CommonLayout = ({
  name,
  email,
  github,
  linkedin,
  children,
  pageLoaderProgress = 100,
}: Props) => {
  const navigate = useNavigate();

  const [fabVisible, setFabVisible] = useState(false);

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeNavClick = () => {
    navigate(NAV_PATHS.BASE);
  };

  const handleProjectsNavClick = () => {
    navigate(NAV_PATHS.PROJECTS.BASE);
  };

  const handleFabClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setFabVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <AppBar
          title="Portfolio"
          onTitleClick={handleTitleClick}
          onHomeNavClick={handleHomeNavClick}
          onProjectsNavClick={handleProjectsNavClick}
        />
        <Content>{children}</Content>
        <Footer name={name} email={email} github={github} linkedin={linkedin} />
        <Zoom in={fabVisible} unmountOnExit>
          <Fab color="primary" onClick={handleFabClick} disableTouchRipple>
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </Container>
      <PageLoader progress={pageLoaderProgress} />
    </>
  );
};

export default CommonLayout;
