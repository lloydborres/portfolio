import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "30px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",

  "h4, ul": {
    margin: 0,
  },

  "li:not(:last-of-type)": {
    marginBottom: 10,
  },

  iframe: {
    alignSelf: "center",
  },

  "iframe.pico-8-embed": {
    width: 621,
    height: 610,
  },
}));

export { Container };
