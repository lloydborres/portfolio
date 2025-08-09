import { useQuery } from "@tanstack/react-query";
import { useServices } from "@hooks";

const useGetContact = () => {
  const { userService } = useServices();

  const userDetailsQuery = useQuery({
    queryKey: ["userDetails"],
    queryFn: () => userService.getUserDetails(),
  });

  return { userDetailsQuery };
};

export default useGetContact;
