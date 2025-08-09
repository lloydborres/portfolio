import { styled, Box, Stack } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }) => ({
  paddingTop: "50px",
  paddingBottom: "50px",

  [theme.breakpoints.down("md")]: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },
}));

const ProjectsContainer = styled(Stack)(({ theme }) => ({
  padding: "0 80px",
  gap: "20px",

  [theme.breakpoints.up("lg")]: {
    "& .MuiCard-root .MuiCardMedia-root": {
      height: "450px",
    },
  },

  [theme.breakpoints.down("md")]: {
    padding: "16px 0",
    gap: "20px",
  },
}));

export { ContentContainer, ProjectsContainer };
