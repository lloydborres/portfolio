import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkillSet, type SkillSetProps } from '.';
import htmlLogoImg from '../../../assets/images/html_logo.svg';
import cssLogoImg from '../../../assets/images/css_logo.svg';
import jsLogoImg from '../../../assets/images/javascript_logo.svg';
import tsLogoImg from '../../../assets/images/typescript_logo.svg';
import reactLogoImg from '../../../assets/images/react_logo.svg';

const meta = {
  title: 'Components/Organisms/SkillSet',
  component: SkillSet,
} satisfies Meta<SkillSetProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {},
  args: {
    title: 'Front-End',
    skillCards: [
      {
        name: 'HTML',
        skillImgSrc: htmlLogoImg,
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
      {
        name: 'CSS',
        skillImgSrc: cssLogoImg,
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
      {
        name: 'JavaScript',
        skillImgSrc: jsLogoImg,
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
      {
        name: 'TypeScript',
        skillImgSrc: tsLogoImg,
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
      {
        name: 'React',
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
    ],
  },
};
