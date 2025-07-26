import moment from "moment";
import { Stack, Box, Typography, Link } from "@mui/material";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";
import { IconButton } from "../../atoms";
import { darkModeTheme } from "../../../configs";
import { Container } from "./elements";
import { PAGE_MAX_WIDTH } from "../../../constants";

type Props = {
  name: string;
  onEmailIconClick?: () => void;
  onGitHubIconClick?: () => void;
  onLinkedInIconClick?: () => void;
};

const Component = ({
  name,
  onEmailIconClick,
  onGitHubIconClick,
  onLinkedInIconClick,
}: Props) => {
  const currentYear = moment().year();

  return (
    <Container theme={darkModeTheme}>
      <Stack
        className="footer-content"
        maxWidth={PAGE_MAX_WIDTH}
        justifyContent="space-between"
        alignItems="center"
        flex={1}
      >
        <Box className="copyright-container">
          <Typography variant="body2">
            {`Developed by ${name}, built with React TS + Vite + Material UI — `}
            <Link
              href="https://github.com/lloydborres/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
            {` © ${currentYear}. All rights reserved.`}
          </Typography>
        </Box>
        <Stack alignItems="center" direction="row" spacing={1}>
          {onEmailIconClick && (
            <IconButton
              variant="outlined"
              color="primary"
              onClick={onEmailIconClick}
            >
              <EmailIcon />
            </IconButton>
          )}
          {onGitHubIconClick && (
            <IconButton
              variant="outlined"
              color="primary"
              onClick={onGitHubIconClick}
            >
              <GitHubIcon />
            </IconButton>
          )}
          {onLinkedInIconClick && (
            <IconButton
              variant="outlined"
              color="primary"
              onClick={onLinkedInIconClick}
            >
              <LinkedInIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Component;
export type { Props };
