import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  htmlLogoImg,
  cssLogoImg,
  javascriptLogoImg,
  typescriptLogoImg,
  reactLogoImg,
} from "@assets";
import SkillSet from "./SkillSet";

const meta = {
  title: "Components/Organisms/SkillSet",
  component: SkillSet,
} satisfies Meta<typeof SkillSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    title: "Front-End",
    skillCards: [
      {
        skillImgSrc: htmlLogoImg,
        label: "HTML",
      },
      {
        skillImgSrc: cssLogoImg,
        label: "CSS",
      },
      {
        skillImgSrc: javascriptLogoImg,
        label: "JavaScript",
      },
      {
        skillImgSrc: typescriptLogoImg,
        label: "TypeScript",
      },
      {
        skillImgSrc: reactLogoImg,
        label: "React",
      },
    ],
  },
};
