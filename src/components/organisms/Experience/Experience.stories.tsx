import type { Meta, StoryObj } from '@storybook/react-vite';
import { Experience, type ExperienceProps } from '.';

const meta = {
  title: 'Components/Organisms/Experience',
  component: Experience,
} satisfies Meta<ExperienceProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneCompany: Story = {
  argTypes: {},
  args: {
    experiences: [
      {
        companyName: 'Company A',
        positions: [
          {
            title: 'Software Engineer',
            startDate: new Date('1/1/2020'),
            location: 'Philippines',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      },
    ],
  },
};

export const TwoCompany: Story = {
  argTypes: {},
  args: {
    experiences: [
      {
        companyName: 'Company A',
        positions: [
          {
            title: 'Software Engineer',
            startDate: new Date('4/1/2022'),
            location: 'Philippines',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      },
      {
        companyName: 'Company B',
        positions: [
          {
            title: 'Software Engineer',
            startDate: new Date('5/1/2020'),
            endDate: new Date('4/1/2021'),
            location: 'Philippines',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
          {
            title: 'Associate Software Engineer',
            startDate: new Date('1/1/2018'),
            endDate: new Date('3/1/2019'),
            location: 'Philippines',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
        ],
      },
    ],
  },
};
