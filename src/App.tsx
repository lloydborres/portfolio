import "./App.css";
import { ThemeProvider } from "@mui/material";
import { portfolioTheme } from "./configs";
import { HomePage } from "./features/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={portfolioTheme}>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
