import { styled, Stack, Box, Link } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.up("lg")]: {
    height: "calc(100vh - 60px)",
    padding: "30px 15px",
    position: "sticky",
    top: 0,
    left: 0,
  },
}));

const ProfilePicContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 87,

  img: {
    position: "absolute",
    top: 0,
    left: "calc(50% - (173px/2))",
    height: 173,
    width: 173,
    objectFit: "cover",
    borderRadius: 20,
  },

  [theme.breakpoints.up("lg")]: {
    height: 110,
    img: {
      left: "calc(50% - (219px/2))",
      height: 219,
      width: 219,
    },
  },
}));

const InfoContainer = styled(Stack)(({ theme }) => ({
  gap: 20,
  padding: "100px 20px 20px",
  background: theme.palette.background.paper,
  borderRadius: 20,

  ".user-info-name": {
    fontSize: 36,
    textAlign: "center",
  },

  ".user-info-title": {
    fontSize: 16,
    textAlign: "center",
  },

  [theme.breakpoints.up("lg")]: {
    height: "calc(100% - 120px)",
    padding: "140px 34px 0",
  },
}));

const LinkIcon = styled(Link)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 7,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 10,

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper,
  },
}));

const InfoLink = styled(Link)(({ theme }) => ({
  display: "flex",
  gap: 10,
  padding: 30,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 10,
  textDecoration: "none",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export { Container, ProfilePicContainer, InfoContainer, LinkIcon, InfoLink };
