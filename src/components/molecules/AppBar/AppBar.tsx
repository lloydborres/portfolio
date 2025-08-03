import {
  alpha,
  Toolbar,
  Typography,
  useTheme,
  type AppBarProps,
} from "@mui/material";
import { Web as WebIcon } from "@mui/icons-material";
// import portfolioLogoLightImg from "../../../assets/images/portfolio_logo_light.svg";
import { StyledAppBar } from "./AppBar.styles";

type Props = {
  title: string;
  onTitleClick: () => void;
} & AppBarProps;

const Component = ({ title, onTitleClick, ...otherProps }: Props) => {
  const theme = useTheme();

  const rgbaBackground = alpha(theme.palette.primary.main, 0.5);
  // const rgbaBackground = alpha(theme.palette.grey["900"], 0.5);

  return (
    <StyledAppBar sx={{ background: rgbaBackground }} {...otherProps}>
      <Toolbar>
        <WebIcon className="toolbar-icon" />
        {/* <img className="toolbar-icon" alt="Logo" src={portfolioLogoLightImg} /> */}
        <Typography
          variant="h6"
          component="div"
          className="toolbar-title"
          onClick={onTitleClick}
        >
          {title}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Component;
