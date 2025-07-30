import React, { useState, useEffect } from "react";
import { Zoom, Fab } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
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

  const [fabVisible, setFabVisible] = useState(false);

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <Container>
      <AppBar title="Portfolio" onTitleClick={handleTitleClick} />
      <Content>{children}</Content>
      <Footer name={name} email={email} github={github} linkedin={linkedin} />
      <Zoom in={fabVisible} unmountOnExit>
        <Fab color="primary" onClick={handleFabClick} disableTouchRipple>
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Container>
  );
};

export default CommonLayout;
