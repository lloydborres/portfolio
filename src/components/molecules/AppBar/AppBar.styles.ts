import {
  styled,
  AppBar,
  Drawer,
  type Theme,
  Toolbar,
  List,
} from "@mui/material";
// import { PAGE_MAX_WIDTH } from "@constants";

const StyledAppBar = styled(AppBar)<{ theme?: Theme }>(() => ({
  borderRadius: 20,
}));

const StyledToolbar = styled(Toolbar)<{ theme?: Theme }>(({ theme }) => ({
  justifyContent: "end",

  ".toolbar-menu": {
    display: "none",
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "center",

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
