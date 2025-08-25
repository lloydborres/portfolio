import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";

const useGetPortfolioDetails = () => {
  const { portfolioService } = useServices();

  const query = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  return query;
};

export default useGetPortfolioDetails;
