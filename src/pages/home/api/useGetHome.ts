import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";

const useGetHome = () => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  const portfolioId = portfolioDetailsQuery.data?.id;

  const featuredItemsQuery = useQuery({
    queryKey: ["portfolioFeaturedItems", portfolioId],
    queryFn: () => {
      if (portfolioId)
        return portfolioService.getPortfolioFeaturedItems(portfolioId);
    },
  });

  return { portfolioDetailsQuery, featuredItemsQuery };
};

export default useGetHome;
