import { useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Place as PlaceIcon,
  Web as WebIcon,
  YouTube as YouTubeIcon,
  X as XIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import { GitLabIcon } from "@components";
import {
  Container,
  ProfilePicContainer,
  ProfilePicWrapper,
  InfoContainer,
  LinkIcon,
  InfoLink,
} from "./UserInfo.styles";

type Props = {
  name?: string;
  title?: string;
  profilePicUrl?: string;
  personalSiteUrl?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  linkedInUrl?: string;
  youtubeUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  email?: string;
  phone?: string;
  location?: string;
};

const Component = ({
  name,
  title,
  profilePicUrl,
  personalSiteUrl,
  githubUrl,
  gitlabUrl,
  linkedInUrl,
  youtubeUrl,
  twitterUrl,
  instagramUrl,
  facebookUrl,
  email,
  phone,
  location,
}: Props) => {
  const [profilePicLoading, setProfilePicLoading] = useState(true);

  const handleProfilePicLoad = () => {
    setProfilePicLoading(false);
  };

  return (
    <Container>
      <ProfilePicContainer>
        <ProfilePicWrapper>
          {profilePicLoading && <Skeleton variant="rectangular" />}
          <img
            alt="Profile Picture"
            style={profilePicLoading ? { display: "none" } : {}}
            src={profilePicUrl}
            onLoad={handleProfilePicLoad}
          />
        </ProfilePicWrapper>
      </ProfilePicContainer>
      <InfoContainer>
        <Typography className="user-info-name" variant="h1">
          {name ? name : <Skeleton />}
        </Typography>
        <Typography className="user-info-title" variant="body1">
          {title ? title : <Skeleton />}
        </Typography>
        <Stack
          flexDirection="row"
          justifyContent="center"
          gap="20px"
          flexWrap="wrap"
        >
          {!!personalSiteUrl && (
            <LinkIcon
              href={personalSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebIcon />
            </LinkIcon>
          )}
          {!!githubUrl && (
            <LinkIcon
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </LinkIcon>
          )}
          {!!gitlabUrl && (
            <LinkIcon
              href={gitlabUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitLabIcon />
            </LinkIcon>
          )}
          {!!linkedInUrl && (
            <LinkIcon
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </LinkIcon>
          )}
          {!!youtubeUrl && (
            <LinkIcon
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </LinkIcon>
          )}
          {!!twitterUrl && (
            <LinkIcon
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon />
            </LinkIcon>
          )}
          {!!instagramUrl && (
            <LinkIcon
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </LinkIcon>
          )}
          {!!facebookUrl && (
            <LinkIcon
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </LinkIcon>
          )}
        </Stack>
        <Stack gap="20px">
          {!!email && (
            <InfoLink href={`mailto:${email}`}>
              <EmailIcon />
              <Typography>{email}</Typography>
            </InfoLink>
          )}
          {!!phone && (
            <InfoLink>
              <PhoneAndroidIcon />
              <Typography>{phone}</Typography>
            </InfoLink>
          )}
          {!!location && (
            <InfoLink>
              <PlaceIcon />
              <Typography>{location}</Typography>
            </InfoLink>
          )}
        </Stack>
      </InfoContainer>
    </Container>
  );
};

export default Component;
export type { Props };
