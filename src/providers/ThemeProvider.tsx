import { createTheme, ThemeProvider } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#8B0000",
    },
    secondary: {
      main: "#E5FB00",
    },
    background: {
      default: "#F5E5E0",
    },
  },
});

// const darkModeTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

type Props = {
  children?: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Provider;
