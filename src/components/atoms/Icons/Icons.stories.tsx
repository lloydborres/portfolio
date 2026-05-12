import type { Meta, StoryObj } from "@storybook/react-vite";
import { GitLabIcon } from ".";

const meta = {
  title: "Components/Atoms/Icons",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Icons",
  render: () => (
    <>
      <GitLabIcon />
    </>
  ),
};
