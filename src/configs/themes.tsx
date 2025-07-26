import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const portfolioTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const darkModeTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export { portfolioTheme, darkModeTheme };
