import "./App.css";
import {
  QueryClientProvider,
  ServicesProvider,
  ThemeProvider,
  // GlobalStateProvider,
  RouterProvider,
} from "@providers";

function App() {
  return (
    <>
      <QueryClientProvider>
        <ServicesProvider>
          <ThemeProvider>
            {/* <GlobalStateProvider> */}
            <RouterProvider />
            {/* </GlobalStateProvider> */}
          </ThemeProvider>
        </ServicesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
