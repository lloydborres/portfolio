import { useState } from "react";
import { useNavigate } from "react-router";
import { HomeLayout, FeaturedProjects, Section } from "@components";
import { NAV_PATHS, STRG_LIKED_PROJECTS } from "@constants";
import { tagNameToTagPillProps } from "@utils";
import useLikeProject from "../projects/api/useLikeProject";
import useGetHome from "./api/useGetHome";

const HomePage = () => {
  const navigate = useNavigate();

  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { portfolioDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: portfolioDetailsData, isPending: portfolioDetailsPending } =
    portfolioDetailsQuery;
  const {
    data: featuredItemsData,
    isPending: featuredItemsIsPending,
    refetch: featuredItemsRefetch,
  } = featuredItemsQuery;

  const featuredItemsNotReady =
    portfolioDetailsPending || featuredItemsIsPending;

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
              featuredItemsRefetch();
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

  const handleSeeMoreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(NAV_PATHS.PROJECTS.BASE);
  };

  const handleProjectActionClick = (url: string) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <HomeLayout
      userDetails={{
        name: portfolioDetailsData?.name,
        title: portfolioDetailsData?.title,
        profilePicUrl: portfolioDetailsData?.profilePicSrc,
        githubUrl: portfolioDetailsData?.github,
        linkedInUrl: portfolioDetailsData?.linkedin,
        email: portfolioDetailsData?.email,
        location: portfolioDetailsData?.location,
      }}
      menuActiveItem="home"
    >
      <Section header="About">{portfolioDetailsData?.description}</Section>
      <FeaturedProjects
        projects={
          featuredItemsNotReady
            ? Array.from({ length: 2 }).map((_e, idx) => ({
                id: idx.toString(),
                isLoading: true,
              }))
            : featuredItemsData?.projects.map((project) => {
                const firstProjectLink =
                  project.links && project.links.length > 0
                    ? project.links[0]
                    : undefined;

                return {
                  ...project,
                  tags: project.tags?.map((tag) => tagNameToTagPillProps(tag)),
                  isLiked: likedProjects.includes(project.id),
                  onLikeClick: handleLikeClick,
                  actionText: firstProjectLink?.label,
                  onActionClick: firstProjectLink?.url
                    ? handleProjectActionClick(firstProjectLink.url)
                    : undefined,
                  isActionExternal: firstProjectLink?.isExternal,
                };
              })
        }
        onSeeMoreClick={handleSeeMoreClick}
      />
    </HomeLayout>
  );
};

export default HomePage;
