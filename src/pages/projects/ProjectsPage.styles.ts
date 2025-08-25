import { styled, Box } from "@mui/material";

const ProjectsContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,

  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

export { ProjectsContainer };
