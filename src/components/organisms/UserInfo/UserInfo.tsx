import { useState } from "react";
import { Skeleton, Stack, Typography } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Place as PlaceIcon,
} from "@mui/icons-material";
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
  githubUrl?: string;
  linkedInUrl?: string;
  email?: string;
  phone?: string;
  location?: string;
};

const Component = ({
  name,
  title,
  profilePicUrl,
  githubUrl,
  linkedInUrl,
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
        <Stack flexDirection="row" justifyContent="center" gap="20px">
          {!!githubUrl && (
            <LinkIcon
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
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
