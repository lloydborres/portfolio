import {
  alpha,
  Toolbar,
  Typography,
  useTheme,
  type AppBarProps,
} from "@mui/material";
import { Web as WebIcon } from "@mui/icons-material";
import { StyledAppBar } from "./elements";

type Props = {
  title: string;
  onTitleClick: () => void;
} & AppBarProps;

const Component = ({ title, onTitleClick, ...otherProps }: Props) => {
  const theme = useTheme();

  const rgbaPrimary = alpha(theme.palette.primary.main, 0.5);

  return (
    <StyledAppBar sx={{ background: rgbaPrimary }} {...otherProps}>
      <Toolbar>
        <WebIcon className="toolbar-icon" />
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
