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
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
} satisfies Meta<typeof SkillSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    title: "Front-End",
    skillCards: [
      {
        imgSrc: htmlLogoImg,
        label: "HTML",
      },
      {
        imgSrc: cssLogoImg,
        label: "CSS",
      },
      {
        imgSrc: javascriptLogoImg,
        label: "JavaScript",
      },
      {
        imgSrc: typescriptLogoImg,
        label: "TypeScript",
      },
      {
        imgSrc: reactLogoImg,
        label: "React",
      },
    ],
  },
};
