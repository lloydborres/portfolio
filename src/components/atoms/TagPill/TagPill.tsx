import { Typography } from "@mui/material";
import { Container } from "./TagPill.styles";

type Props = {
  label: string;
  imgSrc?: string;
  onClick?: () => void;
};

const Component = ({ label, imgSrc, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {imgSrc && <img alt={label} src={imgSrc} />}
      <Typography>{label}</Typography>
    </Container>
  );
};

export default Component;
export type { Props };
