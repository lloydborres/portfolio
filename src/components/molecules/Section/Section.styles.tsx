import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "30px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",
}));

export { Container };
