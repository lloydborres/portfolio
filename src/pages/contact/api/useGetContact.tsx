import useGetPortfolioDetails from "../../home/api/useGetPortfolioDetails";

const useGetContact = () => {
  const portfolioDetailsQuery = useGetPortfolioDetails();

  return { portfolioDetailsQuery };
};

export default useGetContact;
