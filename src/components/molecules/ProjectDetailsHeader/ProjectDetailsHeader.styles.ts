import { styled, Box, alpha } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[900],
  borderRadius: 20,

  "img.project-cover-img": {
    display: "none",
    width: "100%",
    height: "90%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  ".project-header-content": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  ".project-title": {
    color: theme.palette.common.white,
  },

  ".project-description": {
    color: theme.palette.common.white,
  },

  [theme.breakpoints.up("lg")]: {
    "img.project-cover-img": {
      display: "initial",
    },

    ".project-header-content": {
      background: `linear-gradient(to top, ${alpha(theme.palette.grey[900], 1)} 30%, ${alpha(theme.palette.grey[900], 0)} 80%)`,
      marginTop: 300,
    },
  },
}));

export { Container };
