import React from "react";
import { useNavigate } from "react-router";
import {
  Zoom,
  Fab,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import {
  AppBar,
  Footer,
  PageLoader,
  UserInfo,
  type UserInfoProps,
} from "@components";
import { NAV_PATHS } from "@constants";
import { Container, Content } from "./HomeLayout.styles";

type Props = {
  userDetails: UserInfoProps;
  appBarTitle?: string;
  menuActiveItem?: string;
  children?: React.ReactNode;
  pageLoaderProgress?: number;
};

const HomeLayout = ({
  userDetails,
  menuActiveItem,
  children,
  appBarTitle = "Portfolio",
  pageLoaderProgress = 100,
}: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("lg"));

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

  const handleExperienceNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(NAV_PATHS.EXPERIENCE.BASE);
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
        {isTabletOrMobile ? (
          <Content>
            <AppBar
              title={appBarTitle}
              activeItem={menuActiveItem}
              onTitleClick={handleTitleClick}
              onHomeNavClick={handleHomeNavClick}
              onProjectsNavClick={handleProjectsNavClick}
              onContactNavClick={handleContactNavClick}
            />
            <UserInfo {...userDetails} />
            {children}
            <Footer name={userDetails.name} />
          </Content>
        ) : (
          <>
            <UserInfo {...userDetails} />
            <Content>
              <AppBar
                title={appBarTitle}
                activeItem={menuActiveItem}
                onTitleClick={handleTitleClick}
                onExperienceNavClick={handleExperienceNavClick}
                onHomeNavClick={handleHomeNavClick}
                onProjectsNavClick={handleProjectsNavClick}
                onContactNavClick={handleContactNavClick}
              />
              {children}
              <Footer name={userDetails.name} />
            </Content>
          </>
        )}
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

export default HomeLayout;
