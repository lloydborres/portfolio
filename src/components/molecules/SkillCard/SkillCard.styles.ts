import { styled, Card } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  "& .MuiCardMedia-root": {
    height: "50px",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundSize: "contain",
  },

  "& .MuiCardContent-root": {
    padding: "10px",
    background: theme.palette.grey["A200"],
  },

  "& .MuiCardContent-root:last-child": {
    paddingBottom: "10px",
  },
}));

export { StyledCard };
