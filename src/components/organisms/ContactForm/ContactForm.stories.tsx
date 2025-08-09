import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/internal/test";
import ContactForm from "./ContactForm";

const meta = {
  title: "Components/Organisms/ContactForm",
  component: ContactForm,
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    onSubmitValid: fn(),
    isSendLoading: false,
    sendStatus: "idle",
  },
};
