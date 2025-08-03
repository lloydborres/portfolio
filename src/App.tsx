import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "@configs";
import { ServicesProvider } from "@providers";
import { HomePage } from "./features/Home";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ServicesProvider>
          <ThemeProvider theme={mainTheme}>
            <HomePage />
          </ThemeProvider>
        </ServicesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
