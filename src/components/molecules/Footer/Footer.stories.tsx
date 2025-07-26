import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Footer, type FooterProps } from '.';

const meta = {
  title: 'Components/Molecules/Footer',
  component: Footer,
} satisfies Meta<FooterProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: 'Name',
    onGitHubIconClick: fn(),
    onLinkedInIconClick: fn(),
  },
};
