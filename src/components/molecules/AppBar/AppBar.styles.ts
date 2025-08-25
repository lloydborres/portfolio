import {
  styled,
  AppBar,
  Drawer,
  type Theme,
  Toolbar,
  List,
} from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "2px solid",
  borderRadius: 20,
  top: 20,
  left: 20,
  right: 20,

  [theme.breakpoints.up("lg")]: {
    top: 30,
    left: 0,
    right: 0,
  },
}));

const StyledToolbar = styled(Toolbar)<{ theme?: Theme }>(({ theme }) => ({
  justifyContent: "space-between",

  ".toolbar-brand": {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: theme.palette.secondary.main,
  },

  ".toolbar-brand-icon": {
    height: 30,
    objectFit: "contain",
    color: theme.palette.primary.main,
  },

  ".toolbar-title": {
    fontSize: 20,
  },

  ".toolbar-menu": {
    display: "none",
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "center",

    ".toolbar-brand": {
      display: "none",
    },

    ".toolbar-menu": {
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
    },

    ".toolbar-drawer-button": {
      display: "none",
    },
  },
}));

const StyledList = styled(List)<{ theme?: Theme }>(({ theme }) => ({
  ".MuiListItemButton-root": {
    borderRadius: 10,
    color: theme.palette.grey[600],
  },
  ".MuiListItemButton-root svg": {
    fill: theme.palette.grey[600],
  },
  ".MuiListItemButton-root.Mui-selected": {
    background: "none",
    color: theme.palette.primary.main,
  },
  ".MuiListItemButton-root.Mui-selected svg": {
    fill: theme.palette.primary.main,
  },
}));

const StyleDrawer = styled(Drawer)(() => ({
  ".MuiDrawer-paper": {
    width: "75%",
  },
  ".drawer-close-button-container": {
    display: "flex",
    justifyContent: "flex-end",
    padding: "10px 10px 0 0",
  },
}));

export { StyledAppBar, StyledToolbar, StyledList, StyleDrawer };
