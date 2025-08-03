import { CardContent, CardMedia, Typography } from "@mui/material";
import { StyledCard } from "./SkillCard.styles";
import type { ISkillSetSkill } from "@domain";

type Props = {} & ISkillSetSkill;

const Component = ({ skillImgSrc, label }: Props) => {
  return (
    <StyledCard variant="outlined">
      <CardMedia image={skillImgSrc} />
      <CardContent>
        <Typography variant="body2" align="center">
          {label}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Component;
