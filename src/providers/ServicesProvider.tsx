import { MessageService, PortfolioService } from "@domain";
import {
  firebaseFirestore,
  MessageRepository,
  PortfolioRepository,
} from "@infrastructure";
import { createContext } from "react";

const portfolioRepository = new PortfolioRepository(firebaseFirestore);
const portfolioService = new PortfolioService(portfolioRepository);
const messageRepository = new MessageRepository(firebaseFirestore);
const messageService = new MessageService(messageRepository);

const services = {
  portfolioService,
  messageService,
};

const ServicesContext = createContext(services);

type Props = {
  children?: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export default Provider;
export { ServicesContext };
