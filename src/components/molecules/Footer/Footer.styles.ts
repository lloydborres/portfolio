import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: 30,
  borderRadius: 20,

  ".footer-copyright": {
    textAlign: "center",
    fontSize: 12,
  },
}));

export { Container };
