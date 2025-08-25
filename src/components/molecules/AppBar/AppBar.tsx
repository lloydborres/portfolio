import { useState } from "react";
import {
  alpha,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
  type AppBarProps,
} from "@mui/material";
import {
  Web as WebIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon,
  Call as CallIcon,
} from "@mui/icons-material";
// import portfolioLogoLightImg from "../../../assets/images/portfolio_logo_light.svg";
// import portfolioLogoDarkImg from "../../../assets/images/portfolio_logo_dark.svg";
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
  title,
  onTitleClick,
  onHomeNavClick,
  onExperienceNavClick,
  onProjectsNavClick,
  onContactNavClick,
  activeItem,
  ...otherProps
}: Props) => {
  const theme = useTheme();

  const rgbaBackground = alpha(theme.palette.common.white, 0.5);
  const rgbaBorder = alpha(theme.palette.primary.main, 0.3);

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
        sx={{ background: rgbaBackground, borderColor: rgbaBorder }}
        component="nav"
        position="sticky"
        elevation={0}
        {...otherProps}
      >
        <StyledToolbar>
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

          <Box className="toolbar-brand">
            <WebIcon className="toolbar-brand-icon" />
            {/* <img
              className="toolbar-brand-icon"
              alt="Logo"
              src={portfolioLogoDarkImg}
            /> */}
            <Typography
              variant="h2"
              component="div"
              className="toolbar-title"
              onClick={onTitleClick}
            >
              {title}
            </Typography>
          </Box>

          <IconButton
            className="toolbar-drawer-button"
            onClick={handleDrawerToggle}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </StyledAppBar>
      <StyleDrawer
        component="nav"
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
    </>
  );
};

export default Component;
