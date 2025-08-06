import { CommonLayout, IntroHeader, ProjectCard } from "@components";
import useGetProjects from "./api/useGetProjects";
import { ContentContainer, ProjectsContainer } from "./ProjectsPage.styles";

const ProjectsPage = () => {
  const { userDetailsQuery, projecsQuery } = useGetProjects();
  const { data: userDetailsData, isLoading: userDetailsIsLoading } =
    userDetailsQuery;
  const { data: projetsData, isLoading: projectsIsLoading } = projecsQuery;

  return (
    <CommonLayout
      name={userDetailsData?.name || ""}
      email={userDetailsData?.email}
      github={userDetailsData?.github}
      linkedin={userDetailsData?.linkedin}
      pageLoaderProgress={userDetailsIsLoading || projectsIsLoading ? 0 : 100}
    >
      <IntroHeader pageTitle="Projects" />
      <ContentContainer>
        <ProjectsContainer>
          {projetsData?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ProjectsContainer>
      </ContentContainer>
    </CommonLayout>
  );
};

export default ProjectsPage;
