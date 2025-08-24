import { styled, type Theme } from "@mui/material";

const Container = styled("button")<{ theme?: Theme }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  width: "fit-content",
  padding: "5px 15px",
  border: `1px solid ${theme.palette.primary.main}`,
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
}));

export { Container };
