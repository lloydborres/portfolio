import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";

const useGetHomeData = () => {
  const { userService } = useServices();

  const query = useQuery({
    queryKey: ["getUserDetails"],
    queryFn: () => userService.getUserDetails(),
  });

  return query;
};

export default useGetHomeData;
