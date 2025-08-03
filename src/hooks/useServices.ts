import { ServicesContext } from "@providers";
import { useContext } from "react";

const useServices = () => {
  const context = useContext(ServicesContext);
  if (context === undefined) {
    throw new Error("useServices must be used within a ServiceProvider");
  }
  return context;
};

export default useServices;
