import type { Meta, StoryObj } from "@storybook/react-vite";
import UserInfo from "./UserInfo";

const meta = {
  title: "Components/Organisms/UserInfo",
  component: UserInfo,
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
  argTypes: {},
  args: {
    name: "First Name Last Name",
    title: "Software Engineer",
    profilePicUrl: "",
    githubUrl: "https://github.com",
    linkedInUrl: "",
    email: "id@domain.com",
    phone: "",
    location: "City, Country",
  },
};
