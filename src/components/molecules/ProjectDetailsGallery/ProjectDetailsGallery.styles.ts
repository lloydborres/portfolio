import { styled, Stack } from "@mui/material";

const Container = styled(Stack)(({ theme }) => ({
  gap: 20,
  overflow: "scroll",

  img: {
    height: 141,
    width: "calc(100vw / 1.5)",
    objectFit: "cover",
    cursor: "pointer",
  },

  "img, .MuiSkeleton-root.MuiSkeleton-rectangular": {
    borderRadius: 20,
  },

  [theme.breakpoints.up("lg")]: {
    img: {
      height: 315,
      width: "calc(1200px / 2.5)",
    },

    ".project-gallery-cover": {
      display: "none",
    },
  },
}));

export { Container };
