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
    personalSiteUrl: "",
    githubUrl: "https://github.com",
    gitlabUrl: "https://gitlab.com",
    linkedInUrl: "https://linkedin.com",
    youtubeUrl: "https://youtube.com",
    twitterUrl: "",
    instagramUrl: "",
    facebookUrl: "",
    email: "id@domain.com",
    phone: "",
    location: "City, Country",
  },
};
