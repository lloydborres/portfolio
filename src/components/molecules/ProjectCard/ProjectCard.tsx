import { useState } from "react";
import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Box,
} from "@mui/material";
import {
  OpenInNew as OpenInNewIcon,
  Favorite as FavoriteIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Button, ExpandMore, IconButton } from "@components";
import type { IProject } from "@domain";
import { StyledCard, CardMediaPlaceholder } from "./ProjectCard.styles";

type Props = {
  onLikeClick?: (id: string) => void;
  likes?: number;
  isLiked?: boolean;
} & IProject;

const Component = ({
  id,
  title,
  description,
  coverImg,
  moreDetails,
  actions,
  onLikeClick,
  likes = 0,
  isLiked = false,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const splittedTitle = title.split(" ");
  const titleMoreThan2Words = splittedTitle.length > 1;
  const cardMediaProps = coverImg
    ? { image: coverImg }
    : {
        children: (
          <CardMediaPlaceholder>
            <Typography variant="h4">{`${title[0]}${
              titleMoreThan2Words ? splittedTitle[1][0] : ""
            }`}</Typography>
          </CardMediaPlaceholder>
        ),
      };

  const handleLikeClick = () => {
    if (onLikeClick) onLikeClick(id);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard variant="outlined">
      <CardMedia {...cardMediaProps} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box className="like-container">
          <IconButton
            className={isLiked ? "liked" : undefined}
            onClick={isLiked ? undefined : handleLikeClick}
            disableRipple={isLiked}
            disableFocusRipple={isLiked}
          >
            <FavoriteIcon />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
        </Box>
        {(!!moreDetails || (actions?.length ?? 0) > 0) && (
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {!!moreDetails && (
          <CardContent className="more-details-container">
            <Typography variant="body2" className="more-details-text">
              {moreDetails}
            </Typography>
          </CardContent>
        )}
        {(actions?.length ?? 0) > 0 && (
          <CardActions className="action-buttons-container">
            {actions?.map((action, index) => {
              const hrefProps = !!action.href && {
                href: action.href,
                target: action.isExternal ? "_blank" : undefined,
                rel: action.isExternal ? "noopener noreferrer" : undefined,
              };
              return (
                <Button
                  key={index}
                  // onClick={action.onClick}
                  {...hrefProps}
                  endIcon={action.isExternal && <OpenInNewIcon />}
                >
                  {action.label}
                </Button>
              );
            })}
          </CardActions>
        )}
      </Collapse>
    </StyledCard>
  );
};

export default Component;
