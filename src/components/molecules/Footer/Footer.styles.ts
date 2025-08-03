import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "16px 0",
  backgroundColor: theme.palette.grey[900],

  ".footer-content": {
    flexDirection: "row",
  },

  ".copyright-container": {
    padding: "8px",
    color: theme.palette.common.white,
  },

  [theme.breakpoints.between("sm", "md")]: {
    padding: "16px 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "16px 20px",

    ".footer-content": {
      flexDirection: "column-reverse",
    },
  },
}));

export { Container };
