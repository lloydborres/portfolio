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
  androidLogoImg,
  awsLogoImg,
  azureLogoImg,
  figmaLogoImg,
  flutterLogoImg,
  googleCloudLogoImg,
  javaLogoImg,
  materialUiLogoImg,
  phpLogoImg,
  wordpressLogoImg,
  cloudflareLogoImg,
  dockerLogoImg,
  linuxLogoImg,
  terminalLogoImg,
  windowsLogoImg
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
  ["c-sharp"]: {
    label: "C#",
  },
  ["android"]: {
    imgSrc: androidLogoImg,
    label: "Android",
  },
  ["aws"]: {
    imgSrc: awsLogoImg,
    label: "AWS",
  },
  ["azure"]: {
    imgSrc: azureLogoImg,
    label: "Azure",
  },
  ["figma"]: {
    imgSrc: figmaLogoImg,
    label: "Figma",
  },
  ["flutter"]: {
    imgSrc: flutterLogoImg,
    label: "Flutter",
  },
  ["googleCloud"]: {
    imgSrc: googleCloudLogoImg,
    label: "Google Cloud Platform",
  },
  ["ios"]: {
    label: "iOS",
  },
  ["java"]: {
    imgSrc: javaLogoImg,
    label: "Java",
  },
  ["material-ui"]: {
    imgSrc: materialUiLogoImg,
    label: "Material UI",
  },
  ["php"]: {
    imgSrc: phpLogoImg,
    label: "php",
  },
  ["wordpress"]: {
    imgSrc: wordpressLogoImg,
    label: "Wordpress",
  },
  ["cloudflare"]: {
    imgSrc: cloudflareLogoImg,
    label: "Cloudflare",
  },
  ["docker"]: {
    imgSrc: dockerLogoImg,
    label: "Docker",
  },
  ["linux"]: {
    imgSrc: linuxLogoImg,
    label: "Linux",
  },
  ["ssh"]: {
    imgSrc: terminalLogoImg,
    label: "SSH",
  },
  ["windows"]: {
    imgSrc: windowsLogoImg,
    label: "Windows",
  },
};

type TagLookupKey = keyof typeof TAG_LOOKUP;

export { TAG_LOOKUP };
export type { TagLookupKey };
