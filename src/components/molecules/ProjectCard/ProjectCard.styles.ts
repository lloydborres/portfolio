import { styled, Card } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  width: "100%",
  height: "100%",

  "& .MuiCardMedia-root": {
    height: 300,
  },

  "& .MuiCardContent-root": {
    display: "flex",
    flexDirection: "column",
    padding: "10px 20px 5px",
    flexGrow: 1,
    h3: {
      fontSize: 34,
    },
    p: {
      flexGrow: 1,
    },
  },

  "& .project-card-description": {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 4,
    overflow: "hidden",
  },

  "& .MuiCardActions-root": {
    justifyContent: "space-between",
    padding: "5px 20px 20px",
  },

  "& .project-card-like-container": {
    flexDirection: "row",
    alignItems: "center",

    "button.liked": {
      cursor: "default",
      svg: {
        color: theme.palette.primary.main,
      },
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
