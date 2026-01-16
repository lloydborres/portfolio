import type { Meta, StoryObj } from "@storybook/react-vite";
import ProjectDetailsGallery from "./ProjectDetailsGallery";

const meta = {
  title: "Components/Molecules/ProjectDetailsGallery",
  component: ProjectDetailsGallery,
  globals: {
    backgrounds: { value: "backgroundLight" },
  },
} satisfies Meta<typeof ProjectDetailsGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    items: [
      {
        label: "Image 1",
        src: "",
        type: "image",
      },
      {
        label: "Image 2",
        src: "",
        type: "image",
      },
      {
        label: "Image 3",
        src: "",
        type: "image",
      },
    ],
    isLoading: false,
  },
};
