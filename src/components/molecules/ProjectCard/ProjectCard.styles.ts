import styled from "@emotion/styled";
import { Card, type Theme } from "@mui/material";

const StyledCard = styled(Card)<{ theme?: Theme }>(({ theme }) => ({
  "& .MuiCardMedia-root": {
    height: 350,
  },
  [theme.breakpoints.between("xs", "sm")]: {
    "& .MuiCardMedia-root": {
      height: 300,
    },
  },
}));

const CardMediaPlaceholder = styled("div")<{ theme?: Theme }>(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.grey["800"],
  "& .MuiTypography-root": {
    textAlign: "center",
    fontSize: "5rem",
    color: theme.palette.text.primary,
  },
}));

export { StyledCard, CardMediaPlaceholder };
