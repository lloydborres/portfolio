import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { reactLogoImg } from "@assets";
import TagPill from "./TagPill";

const meta = {
  title: "Components/Atoms/TagPill",
  component: TagPill,
} satisfies Meta<typeof TagPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    label: "React",
    imgSrc: reactLogoImg,
    onClick: fn(),
  },
};

export const NoImage: Story = {
  argTypes: {},
  args: {
    label: "Agile",
  },
};
