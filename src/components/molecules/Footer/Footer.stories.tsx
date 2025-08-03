import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "@components";

const meta = {
  title: "Components/Molecules/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: "Name",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
};
