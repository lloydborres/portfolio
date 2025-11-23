import type { Meta, StoryObj } from "@storybook/react-vite";
import ProjectDetailsHeader from "./ProjectDetailsHeader";

const meta = {
  title: "Components/Molecules/ProjectDetailsHeader",
  component: ProjectDetailsHeader,
} satisfies Meta<typeof ProjectDetailsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    title: "Project A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.",
    links: [
      {
        label: "test",
        url: "https://www.google.com",
      },
      {
        label: "test",
        url: "https://www.google.com",
      },
    ],
  },
};
