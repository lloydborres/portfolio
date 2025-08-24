import { useState } from "react";
import { CommonLayout, ProjectCard } from "@components";
import { tagNameToTagPillProps } from "@utils";
import { STRG_LIKED_PROJECTS } from "@constants";
import useGetProjects from "./api/useGetProjects";
import useLikeProject from "./api/useLikeProject";
import { ProjectsContainer } from "./ProjectsPage.styles";

const ProjectsPage = () => {
  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { portfolioDetailsQuery, projecsQuery } = useGetProjects();
  const { data: portfolioDetailsData, isPending: portfolioDetailsIsPending } =
    portfolioDetailsQuery;
  const {
    data: projetsData,
    isPending: projectsIsPending,
    refetch: projectsRefetch,
  } = projecsQuery;

  const { mutate: likeProjectMutate } = useLikeProject();

  const handleLikeClick = (id: string) => {
    if (portfolioDetailsData) {
      setLikedProjects((prev) => {
        const newLiked = [...prev, id];
        localStorage.setItem(STRG_LIKED_PROJECTS, JSON.stringify(newLiked));
        return newLiked;
      });
      likeProjectMutate(
        { portfolioId: portfolioDetailsData?.id, projectId: id },
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

  const handleProjectActionClick = (url: string) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <CommonLayout
      name={portfolioDetailsData?.name}
      appBarTitle="Projects"
      menuActiveItem="projects"
      pageLoaderProgress={
        portfolioDetailsIsPending || projectsIsPending ? 0 : 100
      }
    >
      <ProjectsContainer>
        {projetsData?.map((project, index) => {
          const firstProjectLink =
            project.links && project.links.length > 0
              ? project.links[0]
              : undefined;

          return (
            <ProjectCard
              key={index}
              {...project}
              tags={project.tags?.map((tag) => tagNameToTagPillProps(tag))}
              onLikeClick={handleLikeClick}
              isLiked={likedProjects.includes(project.id)}
              actionText={firstProjectLink?.label}
              onActionClick={
                firstProjectLink?.url
                  ? handleProjectActionClick(firstProjectLink.url)
                  : undefined
              }
              isActionExternal={firstProjectLink?.isExternal}
            />
          );
        })}
      </ProjectsContainer>
    </CommonLayout>
  );
};

export default ProjectsPage;
