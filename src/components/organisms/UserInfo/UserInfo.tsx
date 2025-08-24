import { Stack, Typography } from "@mui/material";
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
  InfoContainer,
  LinkIcon,
  InfoLink,
} from "./UserInfo.styles";

type Props = {
  name: string;
  title: string;
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
  return (
    <Container>
      {!!profilePicUrl && (
        <ProfilePicContainer>
          <img alt="Profile Picture" src={profilePicUrl} />
        </ProfilePicContainer>
      )}
      <InfoContainer>
        <Typography className="user-info-name" variant="h1">
          {name}
        </Typography>
        <Typography className="user-info-title" variant="body1">
          {title}
        </Typography>
        <Stack flexDirection="row" justifyContent="center" gap="20px">
          {!!githubUrl && (
            <LinkIcon href={githubUrl}>
              <GitHubIcon />
            </LinkIcon>
          )}
          {!!linkedInUrl && (
            <LinkIcon href={linkedInUrl}>
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
