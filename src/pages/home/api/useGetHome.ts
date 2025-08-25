import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";
import useGetPortfolioDetails from "./useGetPortfolioDetails";

const useGetHome = () => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useGetPortfolioDetails();

  const portfolioId = portfolioDetailsQuery.data?.id;

  const featuredItemsQuery = useQuery({
    queryKey: ["portfolioFeaturedItems", portfolioId],
    queryFn: () => {
      if (portfolioId)
        return portfolioService.getPortfolioFeaturedItems(portfolioId);
      return null;
    },
  });

  return { portfolioDetailsQuery, featuredItemsQuery };
};

export default useGetHome;
