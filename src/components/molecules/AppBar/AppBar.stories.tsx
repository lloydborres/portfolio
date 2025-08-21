import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import AppBar from "./AppBar";

const meta = {
  title: "Components/Molecules/AppBar",
  component: AppBar,
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: {
    backgrounds: { value: "red50" },
  },
  argTypes: {
    activeItem: {
      control: { type: "select" },
      options: ["home", "experience", "projects", "contact"],
    },
  },
  args: {
    title: "Portfolio",
    onTitleClick: fn(),
    activeItem: "home",
  },
};
