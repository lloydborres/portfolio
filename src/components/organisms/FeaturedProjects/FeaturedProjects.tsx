import { Typography } from "@mui/material";
import { Button, ProjectCard, type ProjectCardProps } from "@components";
import { Container, CardsContainer } from "./FeaturedProjects.styles";

type Props = {
  projects?: ProjectCardProps[];
  onSeeMoreClick?: () => void;
};

const Component = ({ projects, onSeeMoreClick }: Props) => {
  return (
    <Container>
      <Typography variant="h2">Projects</Typography>
      <CardsContainer>
        {projects?.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </CardsContainer>
      {!!onSeeMoreClick && (
        <Button variant="contained" onClick={onSeeMoreClick}>
          See More
        </Button>
      )}
    </Container>
  );
};

export default Component;
