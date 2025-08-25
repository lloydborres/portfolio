import { styled, type Theme } from "@mui/material";

const Container = styled("button")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  width: "fit-content",
  padding: "5px 15px",
  border: "none",
  // boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
  // TODO: Use color above and hover below if you decide to make it clickable
  boxShadow: `0 0 0 1px ${theme.palette.grey["400"]}`,
  background: theme.palette.common.white,
  borderRadius: 40,
  // cursor: "pointer",

  // "&:hover": {
  //   background: theme.palette.primary.main,
  //   color: theme.palette.common.white,
  // },

  img: {
    height: 20,
    width: 20,
    objectFit: "cover",
  },

  ".MuiTypography-root": {
    color: theme.palette.text.primary,
  },
}));

export { Container };
