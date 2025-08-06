import { useState } from "react";
import { CommonLayout, IntroHeader, ProjectCard } from "@components";
import { STRG_LIKED_PROJECTS } from "@constants";
import useGetProjects from "./api/useGetProjects";
import useLikeProject from "./api/useLikeProject";
import { ContentContainer, ProjectsContainer } from "./ProjectsPage.styles";

const ProjectsPage = () => {
  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { userDetailsQuery, projecsQuery } = useGetProjects();
  const { data: userDetailsData, isLoading: userDetailsIsLoading } =
    userDetailsQuery;
  const {
    data: projetsData,
    isLoading: projectsIsLoading,
    refetch: projectsRefetch,
  } = projecsQuery;

  const { mutate: likeProjectMutate } = useLikeProject();

  const handleLikeClick = (id: string) => {
    if (userDetailsData) {
      setLikedProjects((prev) => {
        const newLiked = [...prev, id];
        localStorage.setItem(STRG_LIKED_PROJECTS, JSON.stringify(newLiked));
        return newLiked;
      });
      likeProjectMutate(
        { userId: userDetailsData?.id, projectId: id },
        {
          onSuccess: (res) => {
            if (res) {
              projectsRefetch();
            } else {
              setLikedProjects((prev) => {
                const newLiked = [...prev].filter((e) => e !== id);
                localStorage.setItem(
                  STRG_LIKED_PROJECTS,
                  JSON.stringify(newLiked)
                );
                return newLiked;
              });
            }
          },
          onError: () => {
            setLikedProjects((prev) => {
              const newLiked = [...prev].filter((e) => e !== id);
              localStorage.setItem(
                STRG_LIKED_PROJECTS,
                JSON.stringify(newLiked)
              );
              return newLiked;
            });
          },
        }
      );
    }
  };

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
            <ProjectCard
              key={index}
              {...project}
              onLikeClick={handleLikeClick}
              isLiked={likedProjects.includes(project.id)}
            />
          ))}
        </ProjectsContainer>
      </ContentContainer>
    </CommonLayout>
  );
};

export default ProjectsPage;
