import { useMutation } from "@tanstack/react-query";
import type { ILikeProjectInput } from "@domain";
import { useServices } from "@hooks";

const useLikeProject = () => {
  const { portfolioService } = useServices();

  const mutation = useMutation({
    mutationKey: ["likeProject"],
    mutationFn: (data: ILikeProjectInput) => portfolioService.likeProject(data),
  });

  return mutation;
};

export default useLikeProject;
