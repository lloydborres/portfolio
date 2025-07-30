import type { Meta, StoryObj } from "@storybook/react-vite";
import { IntroHeader, type IntroHeaderProps } from ".";

const meta = {
  title: "Components/Molecules/IntroHeader",
  component: IntroHeader,
} satisfies Meta<IntroHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: "Nick Name",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    email: "test@mail.com",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
};
