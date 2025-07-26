import type { Meta, StoryObj } from "@storybook/react-vite";
import { Email as EmailIcon } from "@mui/icons-material";
import { IconButton } from ".";

const meta = {
  title: "Components/Atoms/IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "outlined"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
  args: {
    variant: "outlined",
    color: "primary",
    children: <EmailIcon />,
  },
};
