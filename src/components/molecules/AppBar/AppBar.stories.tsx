import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { AppBar } from ".";

const meta = {
  title: "Components/Molecules/AppBar",
  component: AppBar,
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    title: "Portfolio",
    onTitleClick: fn(),
  },
};
