import React from "react";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { StyledCard } from "./elements";

type Props = {
  skillImgSrc?: string;
  children?: React.ReactNode;
  onCardClick?: () => void;
};

const Component = ({ skillImgSrc, children, onCardClick }: Props) => {
  return (
    <StyledCard variant="outlined" onClick={onCardClick}>
      <CardMedia image={skillImgSrc} />
      <CardContent>
        <Typography variant="body2" align="center">
          {children}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default Component;
export type { Props };
