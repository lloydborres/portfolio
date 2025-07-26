import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillCard, type SkillCardProps } from '.';
import reactLogoImg from '../../../assets/images/react_logo.svg';

const meta = {
  title: 'Components/Molecules/SkillCard',
  component: SkillCard,
} satisfies Meta<SkillCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    name: 'React',
    expanded: false,
    skillImgSrc: reactLogoImg,
    children: (
      <div>
        <div>Used in</div>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </div>
    ),
  },
};
