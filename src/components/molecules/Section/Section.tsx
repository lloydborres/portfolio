import { Typography } from "@mui/material";
import { Container } from "./Section.styles";

type Props = {
  header?: string;
  children?: React.ReactNode;
};

const Component = ({ header, children }: Props) => {
  return (
    <Container>
      <Typography variant="h3" sx={{ fontSize: 36 }}>
        {header}
      </Typography>
      {typeof children === "string" ? (
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {children}
        </Typography>
      ) : (
        children
      )}
    </Container>
  );
};

export default Component;
