import type { Meta, StoryObj } from '@storybook/react-vite';
import { CommonLayout } from '.';

const meta = {
  title: 'Components/Templates/CommonLayout',
  component: CommonLayout,
} satisfies Meta<typeof CommonLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    children: <div style={{ background: 'red' }}>Content Here</div>,
  },
};
