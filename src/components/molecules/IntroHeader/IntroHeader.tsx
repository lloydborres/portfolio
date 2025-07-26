import { Stack, Typography } from "@mui/material";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { IconButton } from "../../atoms";
import { Container } from "./elements";
import { darkModeTheme } from "../../../configs";

type Props = {
  name: string;
  title: string;
  description: string;
  profilePicSrc?: string;
  onEmailIconClick?: () => void;
  onGitHubIconClick?: () => void;
  onLinkedInIconClick?: () => void;
};

const Component = ({
  name,
  title,
  description,
  profilePicSrc,
  onEmailIconClick,
  onGitHubIconClick,
  onLinkedInIconClick,
}: Props) => {
  return (
    <Container theme={darkModeTheme}>
      <div className="profile-picture-container">
        {!!profilePicSrc && <img alt="Profile" src={profilePicSrc} />}
      </div>
      <div className="intro-container">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" className="intro-description">
          {description}
        </Typography>
      </div>
      <Stack alignItems="center" direction="row" spacing={1}>
        {onEmailIconClick && (
          <IconButton color="primary" onClick={onEmailIconClick}>
            <EmailIcon />
          </IconButton>
        )}
        {onGitHubIconClick && (
          <IconButton color="primary" onClick={onGitHubIconClick}>
            <GitHubIcon />
          </IconButton>
        )}
        {onLinkedInIconClick && (
          <IconButton color="primary" onClick={onLinkedInIconClick}>
            <LinkedInIcon />
          </IconButton>
        )}
      </Stack>
    </Container>
  );
};

export default Component;
export type { Props };
