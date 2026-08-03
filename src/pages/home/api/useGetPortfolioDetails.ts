import { useServices } from "@hooks";
import { useQuery } from "@tanstack/react-query";

const useGetPortfolioDetails = () => {
  const { portfolioService } = useServices();

  const portfolioDetailsQuery = useQuery({
    queryKey: ["portfolioDetails"],
    queryFn: () => portfolioService.getPortfolioDetails(),
  });

  const { data: portfolioDetailsData } = portfolioDetailsQuery;

  const userDetails = {
    name: portfolioDetailsData?.name,
    title: portfolioDetailsData?.title,
    profilePicUrl: portfolioDetailsData?.profilePicSrc,
    personalSiteUrl: portfolioDetailsData?.personalSite,
    githubUrl: portfolioDetailsData?.github,
    gitlabUrl: portfolioDetailsData?.gitlab,
    linkedInUrl: portfolioDetailsData?.linkedin,
    youtubeUrl: portfolioDetailsData?.youtube,
    twitterUrl: portfolioDetailsData?.twitter,
    instagramUrl: portfolioDetailsData?.instagram,
    facebookUrl: portfolioDetailsData?.facebook,
    email: portfolioDetailsData?.email,
    phone: portfolioDetailsData?.phone,
    location: portfolioDetailsData?.location,
  };

  return { portfolioDetailsQuery, userDetails };
};

export default useGetPortfolioDetails;
