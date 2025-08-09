import { styled, Box } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: "20px 20px",

  "& .contact-form-send-button": {
    width: 200,
    alignSelf: "center",
    marginTop: 30,
  },

  "& button.Mui-disabled.button-success": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },

  [theme.breakpoints.down("sm")]: {
    "& .contact-form-send-button": {
      width: "100%",
    },
  },
}));

export { Container };
