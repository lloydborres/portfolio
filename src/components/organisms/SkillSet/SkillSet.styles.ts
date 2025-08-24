import { styled, Box } from "@mui/material";

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  },
}));

export { CardsContainer };
