import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  padding: 30,
  background: theme.palette.background.paper,
  borderRadius: 20,

  h2: {
    fontSize: 36,
    width: "100%",
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  gap: 20,
  width: "100%",

  [theme.breakpoints.up("lg")]: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
}));

export { Container, CardsContainer };
