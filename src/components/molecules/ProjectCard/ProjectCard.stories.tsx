import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectCard } from "@components";

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
    actions: [
      {
        label: "Action 1",
        isExternal: true,
      },
      {
        label: "Action 2",
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
