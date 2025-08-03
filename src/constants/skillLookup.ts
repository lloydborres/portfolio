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
};

type SkillLookupKey = keyof typeof SKILL_LOOKUP;

export { SKILL_LOOKUP };
export type { SkillLookupKey };
