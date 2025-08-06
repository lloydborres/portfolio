import { useState } from "react";
import {
  CommonLayout,
  Experience,
  FeaturedProjects,
  IntroHeader,
  SkillSet,
} from "@components";
import { STRG_LIKED_PROJECTS } from "@constants";
import useLikeProject from "../projects/api/useLikeProject";
import useGetHome from "./api/useGetHome";

const HomePage = () => {
  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { userDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: userDetailsData, isLoading: userDetailsIsLoading } =
    userDetailsQuery;
  const {
    data: featuredItemsData,
    isLoading: featuredItemsIsLoading,
    refetch: featuredItemsRefetch,
  } = featuredItemsQuery;

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

  return (
    <CommonLayout
      name={userDetailsData?.name || ""}
      email={userDetailsData?.email}
      github={userDetailsData?.github}
      linkedin={userDetailsData?.linkedin}
      pageLoaderProgress={
        userDetailsIsLoading && featuredItemsIsLoading ? 0 : 100
      }
    >
      <IntroHeader userDetails={userDetailsData} />
      <FeaturedProjects
        projects={featuredItemsData?.projects.map((project) => ({
          ...project,
          isLiked: likedProjects.includes(project.id),
          onLikeClick: handleLikeClick,
        }))}
      />
      <Experience experiences={featuredItemsData?.experiences} />
      {featuredItemsData?.skillSets?.map((skillSetItem, index) => (
        <SkillSet
          key={index}
          title={skillSetItem.title}
          skillCards={skillSetItem.skills}
        />
      ))}
    </CommonLayout>
  );
};

export default HomePage;
