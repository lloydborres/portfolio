import { CardContent, CardMedia, Typography } from "@mui/material";
import { StyledCard } from "./SkillCard.styles";

type Props = {
  label: string;
  imgSrc?: string;
};

const Component = ({ label, imgSrc }: Props) => {
  return (
    <StyledCard variant="outlined">
      <CardMedia image={imgSrc} />
      <CardContent>
        <Typography variant="body2" align="center">
          {label}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Component;
export type { Props };
