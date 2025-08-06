import type { Meta, StoryObj } from "@storybook/react-vite";
import CommonLayout from "./CommonLayout";
import { MemoryRouter } from "react-router";

const meta = {
  title: "Components/Templates/CommonLayout",
  component: CommonLayout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
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
