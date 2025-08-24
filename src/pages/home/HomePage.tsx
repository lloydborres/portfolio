import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { HomeLayout, FeaturedProjects } from "@components";
import { STRG_LIKED_PROJECTS } from "@constants";
import useLikeProject from "../projects/api/useLikeProject";
import useGetHome from "./api/useGetHome";

const HomePage = () => {
  const theme = useTheme();

  const [likedProjects, setLikedProjects] = useState<string[]>(() => {
    const cachedLikedProjects = localStorage.getItem(STRG_LIKED_PROJECTS);
    if (cachedLikedProjects) {
      const parsed: string[] = JSON.parse(cachedLikedProjects);
      return parsed;
    }
    return [];
  });

  const { userDetailsQuery, featuredItemsQuery } = useGetHome();
  const { data: userDetailsData, isPending: userDetailsIsPending } =
    userDetailsQuery;
  const {
    data: featuredItemsData,
    isPending: featuredItemsIsPending,
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
    <HomeLayout
      userDetails={{
        name: userDetailsData?.name || "",
        title: userDetailsData?.title || "",
        profilePicUrl: userDetailsData?.profilePicSrc,
        githubUrl: userDetailsData?.github,
        linkedInUrl: userDetailsData?.linkedin,
        email: userDetailsData?.email,
        location: userDetailsData?.location,
      }}
      menuActiveItem="home"
      pageLoaderProgress={
        userDetailsIsPending || featuredItemsIsPending ? 0 : 100
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          backgroundColor: theme.palette.common.white,
          borderRadius: "20px",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: 36 }}>
          About
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {userDetailsData?.description}
        </Typography>
      </Box>
      <FeaturedProjects
        projects={featuredItemsData?.projects.map((project) => ({
          ...project,
          isLiked: likedProjects.includes(project.id),
          onLikeClick: handleLikeClick,
        }))}
      />
    </HomeLayout>
  );
};

export default HomePage;
