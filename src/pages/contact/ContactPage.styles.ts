import { styled, Box } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }) => ({
  paddingTop: "50px",
  paddingBottom: "50px",
  display: "flex",
  justifyContent: "center",

  "& .MuiCardContent-root": {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-evenly",
  },

  "& .MuiCardContent-root > form": {
    width: "400px",
  },

  "& .MuiTypography-root.contact-details-message": {
    marginBottom: 20,
  },

  "& .MuiTypography-root.contact-details-item": {
    display: "flex",
    marginTop: 10,
  },

  "& .MuiTypography-root > svg": {
    marginRight: 5,
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiCardContent-root": {
      display: "flex",
      flexDirection: "column-reverse",
    },

    "& .MuiCardContent-root > form": {
      width: "100%",
    },
  },
}));

const ContactDetailsContainer = styled(Box)(() => ({
  padding: "15px 20px",
}));

export { ContentContainer, ContactDetailsContainer };
