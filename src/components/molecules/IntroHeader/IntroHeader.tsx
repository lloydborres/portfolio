import { Stack, Typography, Link } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { IconButton } from "@components";
import { Container } from "./IntroHeader.styles";

type Props = {
  userDetails?: {
    name: string;
    title: string;
    description: string;
    profilePicSrc?: string;
    email?: string;
    github?: string;
    linkedin?: string;
  };
  pageTitle?: string;
};

const Component = ({ userDetails, pageTitle }: Props) => {
  return (
    <Container>
      {!!userDetails && (
        <>
          <div className="profile-picture-container">
            {!!userDetails.profilePicSrc && (
              <img alt="Profile" src={userDetails.profilePicSrc} />
            )}
          </div>
          <div className="intro-container">
            <Typography variant="h4">{userDetails.name}</Typography>
            <Typography variant="h6">{userDetails.title}</Typography>
            {!!userDetails.email && (
              <Link
                variant="body2"
                href={`mailto:${userDetails.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {userDetails.email}
              </Link>
            )}
            <Typography variant="body2" className="intro-description">
              {userDetails.description}
            </Typography>
          </div>
          <Stack alignItems="center" direction="row" spacing={1}>
            {!!userDetails.github && (
              <Link
                href={userDetails.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton color="primary">
                  <GitHubIcon />
                </IconButton>
              </Link>
            )}
            {!!userDetails.linkedin && (
              <Link
                href={userDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Link>
            )}
          </Stack>
        </>
      )}
      {!!pageTitle && (
        <Typography variant="h3" className="page-title">
          {pageTitle}
        </Typography>
      )}
    </Container>
  );
};

export default Component;
