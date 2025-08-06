import { Typography } from "@mui/material";
import { ProjectCard } from "@components";
import type { IProject } from "@domain";
import { Container, CardsContainer } from "./FeaturedProjects.styles";

type Props = {
  projects?: ({
    onLikeClick?: (id: string) => void;
    likes?: number;
    isLiked?: boolean;
  } & IProject)[];
};

const Component = ({ projects }: Props) => {
  return (
    <Container>
      <Typography variant="h5">Projects</Typography>
      <CardsContainer>
        {projects?.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </CardsContainer>
    </Container>
  );
};

export default Component;
