import { useQuery } from "@tanstack/react-query";
import { useServices } from "@hooks";

const useGetProjectDetailsById = (projectId?: string) => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  const portfolioId = portfolioDetailsQuery.data?.id;

  const projectsDetailsQuery = useQuery({
    queryKey: ["projectDetails", portfolioId, projectId],
    queryFn: () => {
      if (portfolioId && projectId)
        return portfolioService.getProjectDetailsById({
          portfolioId,
          projectId,
        });
    },
  });

  return { portfolioDetailsQuery, projectsDetailsQuery };
};

export default useGetProjectDetailsById;
