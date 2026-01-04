import { useState } from "react";
import { CommonLayout, ProjectCard } from "@components";
import { tagNameToTagPillProps } from "@utils";
import { STRG_LIKED_PROJECTS } from "@constants";
import useGetProjects from "./api/useGetProjects";
import useLikeProject from "./api/useLikeProject";
import { ProjectsContainer } from "./ProjectsPage.styles";
import { useNavigate } from "react-router";

const ProjectsPage = () => {
  const navigate = useNavigate();

  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { portfolioDetailsQuery, projectsQuery } = useGetProjects();
  const { data: portfolioDetailsData, isPending: portfolioDetailsPending } =
    portfolioDetailsQuery;
  const {
    data: projetsData,
    isPending: projectsIsPending,
    refetch: projectsRefetch,
  } = projectsQuery;

  const projectsNotReady = portfolioDetailsPending || projectsIsPending;

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
                  JSON.stringify(newLiked),
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
                JSON.stringify(newLiked),
              );
              return newLiked;
            });
          },
        },
      );
    }
  };

  const handleProjectActionClick = (id: string) => () => {
    navigate(id);
  };

  return (
    <CommonLayout
      name={portfolioDetailsData?.name}
      appBarTitle="Projects"
      menuActiveItem="projects"
    >
      <ProjectsContainer>
        {projectsNotReady
          ? Array.from({ length: 3 }).map((_e, idx) => (
              <ProjectCard key={idx} id={idx.toString()} isLoading />
            ))
          : projetsData?.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  {...project}
                  tags={project.tags?.map((tag) => tagNameToTagPillProps(tag))}
                  onLikeClick={handleLikeClick}
                  isLiked={likedProjects.includes(project.id)}
                  actionText="Read More"
                  onActionClick={handleProjectActionClick(project.id)}
                />
              );
            })}
      </ProjectsContainer>
    </CommonLayout>
  );
};

export default ProjectsPage;
