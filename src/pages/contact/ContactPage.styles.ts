import { styled, Box } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,

  "& .MuiCardContent-root": {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "start",
    justifyContent: "space-evenly",
  },

  "& .MuiCardContent-root > form": {
    width: "100%",
  },

  "& .MuiPaper-root.MuiPaper-outlined": {
    borderRadius: 20,
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

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",

    "& .MuiCardContent-root": {
      display: "flex",
      flexDirection: "row",
    },

    "& .MuiPaper-root.MuiPaper-outlined": {
      width: "fit-content",
      justifySelf: "center",
    },

    "& .MuiCardContent-root > form": {
      width: 400,
    },
  },
}));

const ContactDetailsContainer = styled(Box)(() => ({
  padding: "15px 20px",
}));

export { ContentContainer, ContactDetailsContainer };
