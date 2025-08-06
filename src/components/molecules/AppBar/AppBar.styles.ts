import { styled, AppBar, Drawer, type Theme } from "@mui/material";
import { PAGE_MAX_WIDTH } from "@constants";

const StyledAppBar = styled(AppBar)<{ theme?: Theme }>(({ theme }) => ({
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",

  ".toolbar-icon-container": {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },

  ".toolbar-icon": {
    height: 30,
    objectFit: "contain",
    marginRight: 8,
  },

  ".toolbar-title": {
    cursor: "pointer",
  },

  ".toolbar-menu": {
    ".MuiButton-root": {
      color: theme.palette.common.white,
    },
  },

  ".toolbar-drawer-button": {
    display: "none",
    svg: {
      color: theme.palette.common.white,
    },
  },

  [theme.breakpoints.down("sm")]: {
    ".toolbar-menu": {
      display: "none",
    },

    ".toolbar-drawer-button": {
      display: "initial",
    },
  },

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    "& .MuiToolbar-root": {
      width: "100%",
      maxWidth: PAGE_MAX_WIDTH,
    },
  },
}));

const StyleDrawer = styled(Drawer)(() => ({
  ".MuiDrawer-paper": {
    width: "60%",
  },
}));

export { StyledAppBar, StyleDrawer };
