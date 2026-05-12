import { styled } from "@mui/material";

const CustomSvg = styled("svg")(({ theme }) => ({
  "path.icon-filled": {
    fill: theme.palette.primary.main,
  },
}));

export { CustomSvg };
