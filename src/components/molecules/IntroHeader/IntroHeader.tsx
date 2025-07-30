import { Stack, Typography, Link } from "@mui/material";
import {
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
  email?: string;
  github?: string;
  linkedin?: string;
};

const Component = ({
  name,
  title,
  description,
  profilePicSrc,
  email,
  github,
  linkedin,
}: Props) => {
  return (
    <Container theme={darkModeTheme}>
      <div className="profile-picture-container">
        {!!profilePicSrc && <img alt="Profile" src={profilePicSrc} />}
      </div>
      <div className="intro-container">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{title}</Typography>
        {!!email && (
          <Link
            variant="body2"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </Link>
        )}
        <Typography variant="body2" className="intro-description">
          {description}
        </Typography>
      </div>
      <Stack alignItems="center" direction="row" spacing={1}>
        {!!github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Link>
        )}
        {!!linkedin && (
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
          </Link>
        )}
      </Stack>
    </Container>
  );
};

export default Component;
export type { Props };
