import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";

const meta = {
  title: "Components/Molecules/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
  argTypes: {},
  args: {
    name: "First Name Last Name",
  },
};
