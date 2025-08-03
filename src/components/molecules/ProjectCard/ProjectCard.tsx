import { CardMedia, CardContent, Typography, CardActions } from "@mui/material";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { Button } from "@components";
import type { IProject } from "@domain";
import { StyledCard, CardMediaPlaceholder } from "./ProjectCard.styles";

type Props = {} & IProject;

const Component = ({ title, description, coverImg, actions }: Props) => {
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

  return (
    <StyledCard variant="outlined">
      <CardMedia {...cardMediaProps} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      {(actions?.length ?? 0) > 0 && (
        <CardActions>
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
    </StyledCard>
  );
};

export default Component;
