import { createContext, ReactNode } from "react";

export const AppContext = createContext({});

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
