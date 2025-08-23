import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { firebaseLogoImg, reactLogoImg, typescriptLogoImg } from "@assets";
import FeaturedProjects from "./FeaturedProjects";

const meta = {
  title: "Components/Organisms/FeaturedProjects",
  component: FeaturedProjects,
} satisfies Meta<typeof FeaturedProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
  argTypes: {},
  args: {
    projects: [
      {
        id: "1",
        title: "Project A",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [
          {
            label: "React",
            imgSrc: reactLogoImg,
          },
          {
            label: "TypeScript",
            imgSrc: typescriptLogoImg,
          },
          {
            label: "Firebase",
            imgSrc: firebaseLogoImg,
          },
          {
            label: "Agile",
          },
        ],
      },
      {
        id: "2",
        title: "Project",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: "3",
        title: "Project C",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        skills: [
          {
            label: "React",
            imgSrc: reactLogoImg,
          },
        ],
      },
    ],
    onSeeMoreClick: fn(),
  },
};
