import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";
import useGetPortfolioDetails from "../../home/api/useGetPortfolioDetails";

const useGetExperience = () => {
  const { portfolioService } = useServices();

  const { portfolioDetailsQuery, userDetails } = useGetPortfolioDetails();

  const portfolioId = portfolioDetailsQuery.data?.id;

  const experienceItemsQuery = useQuery({
    queryKey: ["portfolioExperienceItems", portfolioId],
    queryFn: () => {
      if (portfolioId)
        return portfolioService.getPortfolioExperienceItems(portfolioId);
      return null;
    },
    enabled: Boolean(portfolioId),
  });

  return { portfolioDetailsQuery, experienceItemsQuery, userDetails };
};

export default useGetExperience;
