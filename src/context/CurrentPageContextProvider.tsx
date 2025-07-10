import { type ReactNode, useState } from "react";
import CurrentPageContext, {
  type CurrentPageContextType,
} from "./CurrentPageContext";

type CurrentPageContextProviderProps = { children: ReactNode };

export default function CurrentPageContextProvider({
  children,
}: CurrentPageContextProviderProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const context: CurrentPageContextType = { currentPage, setCurrentPage };

  return <CurrentPageContext value={context}>{children}</CurrentPageContext>;
}
