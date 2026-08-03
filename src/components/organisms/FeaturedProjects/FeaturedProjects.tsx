import { Typography } from "@mui/material";
import { Outbound as OutboundIcon } from "@mui/icons-material";
import { Button, ProjectCard, type ProjectCardProps } from "@components";
import { Container, CardsContainer } from "./FeaturedProjects.styles";

type Props = {
  projects?: ProjectCardProps[];
  onSeeMoreClick?: () => void;
};

const Component = ({ projects, onSeeMoreClick }: Props) => {
  return (
    <Container>
      <Typography variant="h3">Projects</Typography>
      <CardsContainer>
        {projects?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </CardsContainer>
      {!!onSeeMoreClick && (
        <Button
          variant="contained"
          className="featured-projects-see-more"
          onClick={onSeeMoreClick}
          endIcon={<OutboundIcon />}
        >
          See More
        </Button>
      )}
    </Container>
  );
};

export default Component;
