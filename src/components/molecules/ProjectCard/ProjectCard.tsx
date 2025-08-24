import {
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Stack,
} from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { IconButton, Button, type TagPillProps, TagPill } from "@components";
import { StyledCard, CardMediaPlaceholder } from "./ProjectCard.styles";

type Props = {
  id: string;
  title: string;
  description: string;
  coverImg?: string;
  moreDetails?: string;
  isFeatured?: boolean;
  tags?: TagPillProps[];
  likes?: number;
  onLikeClick?: (id: string) => void;
  isLiked?: boolean;
};

const Component = ({
  id,
  title,
  description,
  coverImg,
  onLikeClick,
  tags = [],
  likes = 0,
  isLiked = false,
}: Props) => {
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

  return (
    <StyledCard variant="outlined">
      <CardMedia {...cardMediaProps} />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="body1"
          className="project-card-description"
          marginTop="10px"
        >
          {description}
        </Typography>
        <Stack marginTop="10px" direction="row" gap="10px" flexWrap="wrap">
          {tags.map((tag) => (
            <TagPill key={tag.label} label={tag.label} imgSrc={tag.imgSrc} />
          ))}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <Stack className="project-card-like-container">
          <IconButton
            className={isLiked ? "liked" : undefined}
            onClick={isLiked ? undefined : handleLikeClick}
            disableRipple={isLiked}
            disableFocusRipple={isLiked}
          >
            <FavoriteIcon />
          </IconButton>
          <Typography variant="caption">{likes}</Typography>
        </Stack>
        <Button variant="outlined">Read More</Button>
      </CardActions>
    </StyledCard>
  );
};

export default Component;
export type { Props };
