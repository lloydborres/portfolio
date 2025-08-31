import { Skeleton, Typography } from "@mui/material";
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
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {children ? children : <Skeleton />}
        </Typography>
      ) : children ? (
        children
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default Component;
