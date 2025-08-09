import {
  htmlLogoImg,
  cssLogoImg,
  javascriptLogoImg,
  typescriptLogoImg,
  reactLogoImg,
  firebaseLogoImg,
  mysqlLogoImg,
  sqlLogoImg,
  expressjsLogoImg,
  cursorLogoImg,
  dotnetLogoImg,
  gitLogoImg,
  visualStudioLogoImg,
  vsCodeLogoImg,
} from "@assets";

const SKILL_LOOKUP = {
  html: {
    skillImgSrc: htmlLogoImg,
    label: "HTML",
  },
  css: {
    skillImgSrc: cssLogoImg,
    label: "CSS",
  },
  javaScript: {
    skillImgSrc: javascriptLogoImg,
    label: "JavaScript",
  },
  typeScript: {
    skillImgSrc: typescriptLogoImg,
    label: "TypeScript",
  },
  react: {
    skillImgSrc: reactLogoImg,
    label: "React",
  },
  firebase: {
    skillImgSrc: firebaseLogoImg,
    label: "Firebase",
  },
  mySql: {
    skillImgSrc: mysqlLogoImg,
    label: "MySQL",
  },
  msSql: {
    skillImgSrc: sqlLogoImg,
    label: "MSSQL",
  },
  expressJs: {
    skillImgSrc: expressjsLogoImg,
    label: "Express JS",
  },
  cursor: {
    skillImgSrc: cursorLogoImg,
    label: "Cursor",
  },
  dotnet: {
    skillImgSrc: dotnetLogoImg,
    label: ".NET",
  },
  git: {
    skillImgSrc: gitLogoImg,
    label: "Git",
  },
  visualStudio: {
    skillImgSrc: visualStudioLogoImg,
    label: "Visual Studio",
  },
  vsCode: {
    skillImgSrc: vsCodeLogoImg,
    label: "VS Code",
  },
};

type SkillLookupKey = keyof typeof SKILL_LOOKUP;

export { SKILL_LOOKUP };
export type { SkillLookupKey };
