import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/providers";
import "@fontsource/roboto/400.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: "Light", value: "#FFFFFF" },
        dark: { name: "Dark", value: "#333333" },
        red50: { name: "Red50", value: "#FEEBEE" },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: "light" },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
