import { GlobalStateContext } from "@providers";
import { useContext } from "react";

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateContext");
  }
  return context;
};

export default useGlobalState;
