import htmlLogoImg from '../assets/images/html_logo.svg';
import cssLogoImg from '../assets/images/css_logo.svg';
import jsLogoImg from '../assets/images/javascript_logo.svg';
import tsLogoImg from '../assets/images/typescript_logo.svg';
import reactLogoImg from '../assets/images/react_logo.svg';

const portfolioData = {
  name: 'Name',
  title: 'Title/Position',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  profilePicSrc: '',
  urls: {
    email: 'mailto:',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/in/',
  },
  skillSets: [
    {
      title: 'Front-End',
      skills: [
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
  ],
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
};

export { portfolioData };
