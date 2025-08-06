import { useState } from "react";
import {
  alpha,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  type AppBarProps,
} from "@mui/material";
import { Web as WebIcon, Menu as MenuIcon } from "@mui/icons-material";
// import portfolioLogoLightImg from "../../../assets/images/portfolio_logo_light.svg";
import { StyledAppBar, StyleDrawer } from "./AppBar.styles";
import { Button, IconButton } from "@components";

type Props = {
  title: string;
  onTitleClick: () => void;
  onHomeNavClick?: () => void;
  onProjectsNavClick?: () => void;
} & AppBarProps;

const Component = ({
  title,
  onTitleClick,
  onHomeNavClick,
  onProjectsNavClick,
  ...otherProps
}: Props) => {
  const theme = useTheme();

  const rgbaBackground = alpha(theme.palette.primary.main, 0.5);
  // const rgbaBackground = alpha(theme.palette.grey["900"], 0.5);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    {
      label: "Home",
      onClick: onHomeNavClick,
    },
    {
      label: "Projects",
      onClick: onProjectsNavClick,
    },
  ];

  return (
    <>
      <StyledAppBar
        sx={{ background: rgbaBackground }}
        component="nav"
        {...otherProps}
      >
        <Toolbar>
          <Box className="toolbar-icon-container">
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
          </Box>

          <Box className="toolbar-menu">
            {navItems.map((item) => (
              <Button key={item.label} onClick={item.onClick}>
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            className="toolbar-drawer-button"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <StyleDrawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label}>
                <ListItemButton onClick={item.onClick}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </StyleDrawer>
      </nav>
    </>
  );
};

export default Component;
