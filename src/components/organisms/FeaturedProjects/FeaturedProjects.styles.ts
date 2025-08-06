import { styled, Box, Stack } from "@mui/material";

const Container = styled(Box)(() => ({
  padding: "16px 0",
}));

const CardsContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "start",
  gap: 20,
  padding: "16px 0",

  "& .MuiCard-root": {
    width: "calc((100% - 24px) / 2)",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& .MuiCard-root": {
      width: "100%",
    },
  },
}));

export { Container, CardsContainer };
