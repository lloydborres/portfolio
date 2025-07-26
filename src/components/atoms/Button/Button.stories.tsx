import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";

const meta = {
  title: "Components/Atoms/Buttons",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["text", "contained", "outlined"],
    },
  },
  args: {
    variant: "contained",
    children: "Button",
  },
};
