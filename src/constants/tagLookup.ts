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

const TAG_LOOKUP = {
  html: {
    imgSrc: htmlLogoImg,
    label: "HTML",
  },
  css: {
    imgSrc: cssLogoImg,
    label: "CSS",
  },
  javascript: {
    imgSrc: javascriptLogoImg,
    label: "JavaScript",
  },
  typescript: {
    imgSrc: typescriptLogoImg,
    label: "TypeScript",
  },
  react: {
    imgSrc: reactLogoImg,
    label: "React",
  },
  firebase: {
    imgSrc: firebaseLogoImg,
    label: "Firebase",
  },
  ["my-sql"]: {
    imgSrc: mysqlLogoImg,
    label: "MySQL",
  },
  ["ms-sql"]: {
    imgSrc: sqlLogoImg,
    label: "MSSQL",
  },
  ["express-js"]: {
    imgSrc: expressjsLogoImg,
    label: "Express JS",
  },
  cursor: {
    imgSrc: cursorLogoImg,
    label: "Cursor",
  },
  dotnet: {
    imgSrc: dotnetLogoImg,
    label: ".NET",
  },
  git: {
    imgSrc: gitLogoImg,
    label: "Git",
  },
  ["visual-studio"]: {
    imgSrc: visualStudioLogoImg,
    label: "Visual Studio",
  },
  ["vs-code"]: {
    imgSrc: vsCodeLogoImg,
    label: "VS Code",
  },
};

type TagLookupKey = keyof typeof TAG_LOOKUP;

export { TAG_LOOKUP };
export type { TagLookupKey };
