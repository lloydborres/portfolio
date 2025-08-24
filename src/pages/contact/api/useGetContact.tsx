import { useQuery } from "@tanstack/react-query";
import { useServices } from "@hooks";

const useGetContact = () => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  return { portfolioDetailsQuery };
};

export default useGetContact;
