import { useQuery } from "@tanstack/react-query";
import { useServices } from "@hooks";

const useGetProjects = () => {
  const { userService } = useServices();

  const userDetailsQuery = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userService.getUserDetails(),
  });

  const userId = userDetailsQuery.data?.id;

  const projecsQuery = useQuery({
    queryKey: ["userProjects", userId],
    queryFn: () => {
      if (userId) return userService.getUserProjects(userId);
    },
  });

  return { userDetailsQuery, projecsQuery };
};

export default useGetProjects;
