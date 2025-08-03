import { styled, Box } from "@mui/material";
import { PAGE_MAX_WIDTH } from "@constants";

const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",

  "& .MuiFab-root": {
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  alignSelf: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",

  "& > div": {
    paddingLeft: `calc((100% - ${PAGE_MAX_WIDTH}) / 2)`,
    paddingRight: `calc((100% - ${PAGE_MAX_WIDTH}) / 2)`,
  },

  [theme.breakpoints.down("lg")]: {
    "& > div": {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
}));

export { Container, Content };
