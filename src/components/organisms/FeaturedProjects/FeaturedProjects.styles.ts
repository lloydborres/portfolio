import styled from "@emotion/styled";
import { Box, Stack, type Theme } from "@mui/material";

const Container = styled(Box)(() => ({
  padding: "16px 0",
}));

const CardsContainer = styled(Stack)<{ theme?: Theme }>(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  padding: "16px 0",
  "& .MuiCard-root": {
    width: "calc((100% - 24px) / 2)",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "column",
    "& .MuiCard-root": {
      width: "100%",
    },
  },
}));

export { Container, CardsContainer };
