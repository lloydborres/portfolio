import { styled } from "@mui/material";

const Container = styled("div")(() => ({
  padding: "16px 0",
}));

const CardsContainer = styled("div")<{ $cols?: number }>(
  ({ theme, $cols }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "16px 40px",

    "& .MuiCard-root": {
      padding: 0,
      width: `calc((100% - (20px * ${$cols})) / ${$cols})`,
    },

    [theme.breakpoints.down("sm")]: {
      "& .MuiCard-root": {
        width: "calc((100% - (20px * 2)) / 2)",
      },
    },
  })
);

export { Container, CardsContainer };
