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

  const { userDetailsQuery, projecsQuery } = useGetProjects();
  const { data: userDetailsData, isPending: userDetailsIsPending } =
    userDetailsQuery;
  const {
    data: projetsData,
    isPending: projectsIsPending,
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
      name={userDetailsData?.name}
      appBarTitle="Projects"
      menuActiveItem="projects"
      pageLoaderProgress={userDetailsIsPending || projectsIsPending ? 0 : 100}
    >
      <ProjectsContainer>
        {projetsData?.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            tags={project.tags?.map((tag) => tagNameToTagPillProps(tag))}
            onLikeClick={handleLikeClick}
            isLiked={likedProjects.includes(project.id)}
          />
        ))}
      </ProjectsContainer>
    </CommonLayout>
  );
};

export default ProjectsPage;
