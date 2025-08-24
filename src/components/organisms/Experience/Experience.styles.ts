import { styled } from "@mui/material";

const Container = styled("div")(({ theme }) => ({
  padding: 30,
  background: theme.palette.background.paper,
  borderRadius: 20,
}));

const ExperiencesContainer = styled("div")(({ theme }) => ({
  ".experience-row-container": {
    padding: "16px 0",
  },

  ".experience-row-container:not(:first-of-type)": {
    borderTop: "1px solid gray",
  },

  ".position-row-container": {
    display: "flex",
    flexDirection: "row",
    position: "relative",
  },

  ".position-line-container::before": {
    content: '"•"',
    fontSize: "28px",
    color: theme.palette.grey[500],
    position: "absolute",
    top: "10px",
    left: "6px",
  },

  ".position-line-container": {
    width: "1px",
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: "0 10px",
  },

  ".position-row-container:nth-of-type(2):last-of-type > .position-line-container":
    {
      visibility: "hidden",
    },

  ".position-row-container:nth-of-type(2) > .position-line-container": {
    marginTop: "35px",
  },

  ".position-row-container:last-of-type > .position-line-container": {
    height: "18px",
  },

  ".position-container": {
    padding: "16px 0",
  },

  ".position-title": {
    fontWeight: "bold",
  },

  ".position-description": {
    whiteSpace: "pre-wrap",
    paddingTop: "10px",
  },
}));

export { Container, ExperiencesContainer };
