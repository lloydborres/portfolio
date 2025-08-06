import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";

const useGetHome = () => {
  const { userService } = useServices();

  const userDetailsQuery = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userService.getUserDetails(),
  });

  const userId = userDetailsQuery.data?.id;

  const featuredItemsQuery = useQuery({
    queryKey: ["userFeaturedItems", userId],
    queryFn: () => {
      if (userId) return userService.getUserFeaturedItems(userId);
    },
  });

  return { userDetailsQuery, featuredItemsQuery };
};

export default useGetHome;
