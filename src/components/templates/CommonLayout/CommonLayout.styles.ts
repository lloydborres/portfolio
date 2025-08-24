import { styled, Box, Stack } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 30,
  minHeight: "calc(100vh - 40px)",
  backgroundColor: theme.palette.background.default,
  padding: 20,

  "& .MuiFab-root": {
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },

  [theme.breakpoints.up("lg")]: {
    paddingLeft: `calc((100% - ${theme.breakpoints.values.lg}px) / 2)`,
    paddingRight: `calc((100% - ${theme.breakpoints.values.lg}px) / 2)`,
  },
}));

const Content = styled(Stack)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 30,
  flexGrow: 1,
}));

export { Container, Content };
