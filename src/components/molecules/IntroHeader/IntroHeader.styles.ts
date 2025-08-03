import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "85px 0 16px",
  backgroundColor: theme.palette.grey[900],

  ".intro-container": {
    flex: 1,
    whiteSpace: "pre-wrap",
    textAlign: "center",
    color: theme.palette.common.white,
  },

  ".intro-description": {
    marginTop: "10px",
    padding: "20px",
  },

  ".profile-picture-container": {
    height: "100px",
    width: "100px",
    borderRadius: "100px",
    backgroundColor: "gray",
    border: "4px solid white",
  },

  ".profile-picture-container img": {
    height: "100px",
    width: "100px",
    objectFit: "cover",
    borderRadius: "100px",
  },
}));

export { Container };
