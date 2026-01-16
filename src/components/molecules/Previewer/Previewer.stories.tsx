import type { Meta, StoryObj } from "@storybook/react-vite";
import Previewer from "./Previewer";

const meta = {
  title: "Components/Molecules/Previewer",
  component: Previewer,
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
} satisfies Meta<typeof Previewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    open: true,
    children: <img alt="Image Previewer" src="" />,
  },
};
