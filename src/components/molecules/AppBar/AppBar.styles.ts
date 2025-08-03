import { styled, AppBar, type Theme } from "@mui/material";
import { PAGE_MAX_WIDTH } from "@constants";

const StyledAppBar = styled(AppBar)<{ theme?: Theme }>(({ theme }) => ({
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",

  ".toolbar-icon": {
    height: 30,
    objectFit: "contain",
    marginRight: 8,
  },

  ".toolbar-title": {
    cursor: "pointer",
  },

  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    "& .MuiToolbar-root": {
      width: "100%",
      maxWidth: PAGE_MAX_WIDTH,
    },
  },
}));

export { StyledAppBar };
