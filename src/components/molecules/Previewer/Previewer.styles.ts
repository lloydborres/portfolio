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

  "button.previewer-dialog-navigation": {
    position: "absolute",
    top: "calc(50% - 20px)",
    color: theme.palette.common.white,
  },

  "button.previewer-dialog-previous": {
    left: 20,
  },

  "button.previewer-dialog-next": {
    right: 20,
  },

  ".previewer-content": {
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },

  ".previewer-content > *:not(.previewer-dialog-navigation)": {
    width: "calc(100vw - 40px)",
    height: "calc(100vh - 44px)",
    objectFit: "contain",
  },
}));

export { Container };
