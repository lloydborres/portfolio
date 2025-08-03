import type { Meta, StoryObj } from "@storybook/react-vite";
import { reactLogoImg } from "@assets";
import SkillCard from "./SkillCard";

const meta = {
  title: "Components/Molecules/SkillCard",
  component: SkillCard,
} satisfies Meta<typeof SkillCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    skillImgSrc: reactLogoImg,
    label: "React",
  },
};
