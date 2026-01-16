import { Skeleton, Typography, Link } from "@mui/material";
import Markdown from "react-markdown";
import { Container } from "./Section.styles";

type Props = {
  header?: string;
  children?: React.ReactNode;
};

const Component = ({ header, children }: Props) => {
  return (
    <Container>
      <Typography variant="h3" sx={{ fontSize: 36 }}>
        {header ? header : <Skeleton />}
      </Typography>
      {typeof children === "string" ? (
        children ? (
          <Markdown
            components={{
              p: Typography,
              a: (props) => (
                <Link {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {children}
          </Markdown>
        ) : (
          <Skeleton />
        )
      ) : children ? (
        children
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default Component;
