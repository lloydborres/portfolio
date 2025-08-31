import moment from "moment";
import { Typography, Link, Skeleton } from "@mui/material";
import { Container } from "./Footer.styles";

type Props = {
  name?: string;
};

const Component = ({ name }: Props) => {
  const currentYear = moment().year();

  return (
    <Container>
      {name ? (
        <Typography className="footer-copyright" variant="body2">
          {`Developed by ${name}, built with React TS + Vite + Material UI - `}
          <Link
            href="https://github.com/lloydborres/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Link>
          {` © ${currentYear}. All rights reserved.`}
        </Typography>
      ) : (
        <Skeleton
          variant="text"
          width="80%"
          sx={{ justifySelf: "center", placeSelf: "center" }}
        />
      )}
    </Container>
  );
};

export default Component;
