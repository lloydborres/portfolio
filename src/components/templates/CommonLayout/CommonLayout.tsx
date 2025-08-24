import React from "react";
import { useNavigate } from "react-router";
import { Zoom, Fab, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import { AppBar, Footer, PageLoader } from "@components";
import { NAV_PATHS } from "@constants";
import { Container, Content } from "./CommonLayout.styles";

type Props = {
  name?: string;
  appBarTitle?: string;
  menuActiveItem?: string;
  children?: React.ReactNode;
  pageLoaderProgress?: number;
};

const CommonLayout = ({
  name,
  menuActiveItem,
  children,
  appBarTitle = "Portfolio",
  pageLoaderProgress = 100,
}: Props) => {
  const navigate = useNavigate();

  const fabTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(NAV_PATHS.BASE);
  };

  const handleProjectsNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(NAV_PATHS.PROJECTS.BASE);
  };

  const handleContactNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(NAV_PATHS.CONTACT.BASE);
  };

  const handleFabClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container>
        <AppBar
          title={appBarTitle}
          activeItem={menuActiveItem}
          onTitleClick={handleTitleClick}
          onHomeNavClick={handleHomeNavClick}
          onProjectsNavClick={handleProjectsNavClick}
          onContactNavClick={handleContactNavClick}
        />
        <Content>
          {children}
          <Footer name={name} />
        </Content>
        <Zoom in={fabTrigger} unmountOnExit>
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
