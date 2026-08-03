import { Skeleton, Typography, Link } from "@mui/material";
import Markdown from "react-markdown";
import { Container } from "./Section.styles";

type Props = {
  header?: string;
  children?: React.ReactNode;
};

const Component = ({ header, children }: Props) => {
  const isMarkdown = typeof children === "string";

  return (
    <Container className={`${isMarkdown ? "section-markdown-container" : ""}`}>
      <Typography
        variant="h3"
        className="section-header-container"
        sx={{ fontSize: 36 }}
      >
        {header ? header : <Skeleton />}
      </Typography>
      {isMarkdown ? (
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
