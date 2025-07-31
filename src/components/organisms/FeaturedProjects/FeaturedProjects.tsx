import { Container, CardsContainer } from "./FeaturedProjects.styles";
import { ProjectCard, type ProjectCardProps } from "../../molecules";
import { Typography } from "@mui/material";

type Props = {
  projects?: ProjectCardProps[];
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
