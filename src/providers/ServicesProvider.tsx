import { MessageService, UserService } from "@domain";
import {
  firebaseFirestore,
  MessageRepository,
  UserRepository,
} from "@infrastructure";
import { createContext } from "react";

const userRepository = new UserRepository(firebaseFirestore);
const userService = new UserService(userRepository);
const messageRepository = new MessageRepository(firebaseFirestore);
const messageService = new MessageService(messageRepository);

const services = {
  userService,
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
