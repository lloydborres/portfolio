import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { portfolioTheme } from "./configs";
import { HomePage } from "./features/Home";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={portfolioTheme}>
          <HomePage />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
