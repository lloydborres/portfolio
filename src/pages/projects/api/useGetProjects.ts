import { useQuery } from "@tanstack/react-query";
import { useServices } from "@hooks";

const useGetProjects = () => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  const portfolioId = portfolioDetailsQuery.data?.id;

  const projecsQuery = useQuery({
    queryKey: ["portfolioProjects", portfolioId],
    queryFn: () => {
      if (portfolioId)
        return portfolioService.getPortfolioProjects(portfolioId);
    },
  });

  return { portfolioDetailsQuery, projecsQuery };
};

export default useGetProjects;
