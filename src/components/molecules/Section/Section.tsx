import { Typography } from "@mui/material";
import { Container } from "./Section.styles";

type Props = {
  children?: React.ReactNode;
};

const Component = ({ children }: Props) => {
  return (
    <Container>
      <Typography variant="h2" sx={{ fontSize: 36 }}>
        About
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
