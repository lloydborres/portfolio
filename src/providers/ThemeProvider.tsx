import { createTheme, ThemeProvider } from "@mui/material/styles";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: import.meta.env.VITE_APP_THEME_PRIMARY_MAIN,
    },
    secondary: {
      main: import.meta.env.VITE_APP_THEME_SECONDARY_MAIN,
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
