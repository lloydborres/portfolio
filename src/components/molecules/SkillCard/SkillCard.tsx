import React from "react";
import {
  Collapse,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StyledCard } from "./elements";
import { DEVICE_MEDIA_QUERIES } from "../../../constants";

type Props = {
  name: string;
  expanded?: boolean;
  skillImgSrc?: string;
  children?: React.ReactNode;
  onCardClick?: () => void;
};

const Component = ({
  name,
  expanded,
  skillImgSrc,
  children,
  onCardClick,
}: Props) => {
  const isMobile = useMediaQuery(DEVICE_MEDIA_QUERIES.phones);
  const collapseOrientation = isMobile ? "vertical" : "horizontal";

  return (
    <StyledCard
      className={expanded ? "expanded" : "collapsed"}
      variant="outlined"
      onClick={onCardClick}
    >
      <Collapse
        in={!expanded}
        orientation={collapseOrientation}
        timeout={0}
        unmountOnExit
      >
        <CardContent className="collapsed-content">
          <img alt={name} src={skillImgSrc} />
          <Typography variant="h6">{name}</Typography>
        </CardContent>
      </Collapse>
      <Collapse
        in={expanded}
        orientation={collapseOrientation}
        timeout={0}
        unmountOnExit
      >
        <CardContent className="expanded-content">
          <div className="expanded-content-header">
            <img alt={name} src={skillImgSrc} />
            <Typography variant="h6">{name}</Typography>
          </div>
          <div className="expanded-content-content">{children}</div>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default Component;
export type { Props };
