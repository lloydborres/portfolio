import { useState } from "react";
import {
  alpha,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Typography,
  useTheme,
  type AppBarProps,
} from "@mui/material";
import {
  // Web as WebIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Call as CallIcon,
} from "@mui/icons-material";
// import portfolioLogoLightImg from "../../../assets/images/portfolio_logo_light.svg";
import {
  StyledAppBar,
  StyledToolbar,
  StyledList,
  StyleDrawer,
} from "./AppBar.styles";
import { IconButton } from "@components";

type Props = {
  title: string;
  onTitleClick: () => void;
  onHomeNavClick?: () => void;
  onExperienceNavClick?: () => void;
  onProjectsNavClick?: () => void;
  onContactNavClick?: () => void;
  activeItem?: string;
} & AppBarProps;

const Component = ({
  // title,
  // onTitleClick,
  onHomeNavClick,
  onExperienceNavClick,
  onProjectsNavClick,
  onContactNavClick,
  activeItem,
  ...otherProps
}: Props) => {
  const theme = useTheme();

  const rgbaBackground = alpha(theme.palette.common.white, 0.5);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = [
    {
      name: "home",
      label: "Home",
      onClick: onHomeNavClick,
      icon: <HomeIcon />,
    },
    {
      name: "experience",
      label: "Experience",
      onClick: onExperienceNavClick,
      icon: <WorkIcon />,
    },
    {
      name: "projects",
      label: "Projects",
      onClick: onProjectsNavClick,
      icon: <AssignmentIcon />,
    },
    {
      name: "contact",
      label: "Contact",
      onClick: onContactNavClick,
      icon: <CallIcon />,
    },
  ];

  return (
    <>
      <StyledAppBar
        sx={{ background: rgbaBackground }}
        component="nav"
        {...otherProps}
      >
        <StyledToolbar>
          {/* <Box className="toolbar-icon-container">
            <WebIcon className="toolbar-icon" />
            <img
              className="toolbar-icon"
              alt="Logo"
              src={portfolioLogoLightImg}
            />
            <Typography
              variant="h6"
              component="div"
              className="toolbar-title"
              onClick={onTitleClick}
            >
              {title}
            </Typography>
          </Box> */}

          <StyledList className="toolbar-menu">
            {navItems.map((item) => (
              <ListItem key={item.label}>
                <ListItemButton
                  onClick={item.onClick}
                  selected={activeItem === item.name}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </StyledList>

          <IconButton
            className="toolbar-drawer-button"
            onClick={handleDrawerToggle}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <nav>
        <StyleDrawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
        >
          <Box
            className="drawer-close-button-container"
            onClick={handleDrawerToggle}
          >
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Box>
          <StyledList>
            {navItems.map((item) => (
              <ListItem key={item.label}>
                <ListItemButton
                  onClick={item.onClick}
                  selected={activeItem === item.name}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </StyledList>
        </StyleDrawer>
      </nav>
    </>
  );
};

export default Component;
