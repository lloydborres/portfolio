import htmlLogoImg from "../assets/images/html_logo.svg";
import cssLogoImg from "../assets/images/css_logo.svg";
import jsLogoImg from "../assets/images/javascript_logo.svg";
import tsLogoImg from "../assets/images/typescript_logo.svg";
import reactLogoImg from "../assets/images/react_logo.svg";
import firebaseLogoImg from "../assets/images/firebase_logo.svg";
import mySqlLogoImg from "../assets/images/mysql_logo.svg";
import sqlLogoImg from "../assets/images/sql_logo.svg";
import expressLogoImg from "../assets/images/expressjs_logo.svg";

const SKILL_LOOKUP = {
  html: {
    skillImgSrc: htmlLogoImg,
    children: "HTML",
  },
  css: {
    skillImgSrc: cssLogoImg,
    children: "CSS",
  },
  javaScript: {
    skillImgSrc: jsLogoImg,
    children: "JavaScript",
  },
  typeScript: {
    skillImgSrc: tsLogoImg,
    children: "TypeScript",
  },
  react: {
    skillImgSrc: reactLogoImg,
    children: "React",
  },
  firebase: {
    skillImgSrc: firebaseLogoImg,
    children: "Firebase",
  },
  mySql: {
    skillImgSrc: mySqlLogoImg,
    children: "MySQL",
  },
  msSql: {
    skillImgSrc: sqlLogoImg,
    children: "MSSQL",
  },
  expressJs: {
    skillImgSrc: expressLogoImg,
    children: "Express JS",
  },
};

type SkillLookupKey = keyof typeof SKILL_LOOKUP;

export { SKILL_LOOKUP };
export type { SkillLookupKey };
