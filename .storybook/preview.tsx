import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "@mui/material/styles";
import { mainTheme } from "../src/configs";
import "@fontsource/roboto/400.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={mainTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
