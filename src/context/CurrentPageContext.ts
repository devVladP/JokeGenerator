import { createContext } from "react";

export type CurrentPageContextType = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const CurrentPageContext = createContext<CurrentPageContextType>(
  {} as CurrentPageContextType
);

export default CurrentPageContext;
