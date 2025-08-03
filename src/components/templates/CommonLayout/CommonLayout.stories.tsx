import type { Meta, StoryObj } from "@storybook/react-vite";
import CommonLayout from "./CommonLayout";

const meta = {
  title: "Components/Templates/CommonLayout",
  component: CommonLayout,
} satisfies Meta<typeof CommonLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: "Name",
    children: <div style={{ background: "red" }}>Content Here</div>,
    pageLoaderProgress: 50,
  },
};
