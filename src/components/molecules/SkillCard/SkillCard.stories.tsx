import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkillCard, type SkillCardProps } from ".";
import reactLogoImg from "../../../assets/images/react_logo.svg";

const meta = {
  title: "Components/Molecules/SkillCard",
  component: SkillCard,
} satisfies Meta<SkillCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    skillImgSrc: reactLogoImg,
    children: "React",
  },
};
