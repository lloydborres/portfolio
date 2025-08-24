import { styled, Box, Stack } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  backgroundColor: theme.palette.background.default,

  "& .MuiFab-root": {
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    paddingLeft: `calc((100% - ${theme.breakpoints.values.lg}px) / 2)`,
    paddingRight: `calc((100% - ${theme.breakpoints.values.lg}px) / 2)`,
  },
}));

const Content = styled(Stack)(({ theme }) => ({
  position: "relative",
  flexGrow: 1,
  gap: 30,
  padding: "100px 30px 30px",

  [theme.breakpoints.up("lg")]: {
    padding: "30px 15px",
  },
}));

export { Container, Content };
