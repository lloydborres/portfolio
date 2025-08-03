import { styled, Card } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  "& .MuiCardMedia-root": {
    height: 350,
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiCardMedia-root": {
      height: 300,
    },
  },
}));

const CardMediaPlaceholder = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.grey["800"],

  "& .MuiTypography-root": {
    textAlign: "center",
    fontSize: "5rem",
    color: theme.palette.common.white,
  },
}));

export { StyledCard, CardMediaPlaceholder };
