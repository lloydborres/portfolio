import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type GlobalStateProps = {
  useUserDetails: {
    userDetails?: string;
    setUserDetails: Dispatch<SetStateAction<undefined>>;
  };
};

const GlobalStateContext = createContext<GlobalStateProps | null>(null);

type Props = {
  children?: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const [userDetails, setUserDetails] = useState(undefined);

  return (
    <GlobalStateContext.Provider
      value={{ useUserDetails: { userDetails, setUserDetails } }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default Provider;
export { GlobalStateContext };
