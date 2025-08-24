import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { firebaseLogoImg, reactLogoImg, typescriptLogoImg } from "@assets";
import ProjectCard from "./ProjectCard";

const meta = {
  title: "Components/Molecules/ProjectCard",
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    id: "1",
    title: "Project A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: [
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
  render: (args) => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
      setIsLiked(true);
      setLikes((prev) => prev + 1);
    };

    return (
      <ProjectCard
        {...args}
        likes={likes}
        isLiked={isLiked}
        onLikeClick={handleLikeClick}
      />
    );
  },
};
