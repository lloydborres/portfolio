import { useMutation } from "@tanstack/react-query";
import type { ILikeProjectInput } from "@domain";
import { useServices } from "@hooks";

const useLikeProject = () => {
  const { userService } = useServices();

  const mutation = useMutation({
    mutationKey: ["likeProject"],
    mutationFn: (data: ILikeProjectInput) => userService.likeProject(data),
  });

  return mutation;
};

export default useLikeProject;
