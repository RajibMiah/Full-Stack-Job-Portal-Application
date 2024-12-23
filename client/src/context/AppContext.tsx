import { createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ Children }: any): any => {
  const value = {};

  return <AppContext.Provider value={value}>{Children}</AppContext.Provider>;
};
