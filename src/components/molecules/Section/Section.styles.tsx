import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "30px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",

  "&:not(.section-markdown-container)": {
    gap: "20px",
  },

  "&.section-markdown-container": {
    ".section-header-container": {
      marginBottom: "20px",
    },

    "p:not(:last-of-type)": {
      marginBottom: "10px",
    },
  },

  "&.section-markdown-container > ul > li:not(:last-of-type)": {
    marginBottom: 10,
  },

  ".section-header-container": {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  "h3, h4, ul": {
    margin: 0,
  },

  a: {
    overflowWrap: "anywhere",
  },

  iframe: {
    alignSelf: "center",
  },

  "iframe.pico-8-embed": {
    width: "100%",
    height: "85vw",
  },

  [theme.breakpoints.up("lg")]: {
    "iframe.pico-8-embed": {
      width: 621,
      height: 610,
    },
  },
}));

export { Container };
