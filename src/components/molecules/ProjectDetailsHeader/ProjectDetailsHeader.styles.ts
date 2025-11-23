import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.grey[900],

  ".project-title": {
    color: theme.palette.common.white,
  },

  ".project-description": {
    color: theme.palette.common.white,
  },
}));

export { Container };
