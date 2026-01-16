import { styled, Dialog } from "@mui/material";

const Container = styled(Dialog)(({ theme }) => ({
  ".MuiPaper-root": {
    background: "transparent",
  },

  "button.previewer-dialog-close": {
    position: "absolute",
    top: 0,
    right: 0,
    color: theme.palette.common.white,
  },

  ".previewer-content": {
    padding: 20,
  },

  ".previewer-content > *": {
    width: "calc(100vw - 40px)",
    height: "calc(100vh - 44px)",
    objectFit: "contain",
  },
}));

export { Container };
