import { UserService } from "@domain";
import { firebaseFirestore, UserRepository } from "@infrastructure";
import { createContext } from "react";

const userRepository = new UserRepository(firebaseFirestore);
const userService = new UserService(userRepository);

const services = {
  userService,
};

const ServicesContext = createContext(services);

type Props = {
  children?: React.ReactNode;
};

const ServicesProvider = ({ children }: Props) => {
  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
export { ServicesContext };
