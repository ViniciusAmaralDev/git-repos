
import { gitHubOfflineService } from "@/infrastructure/services/github/offline";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";

// MODELS
import { IRepositoryOwner } from "../models/IRepositoryOwner";
import { IRepositoryContext } from "../models/IRepositoryContext";

export const RepositoryContext = createContext({} as IRepositoryContext);

export const RepositoryProvider = ({ children }: PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IRepositoryOwner[]>([]);

  useEffect(() => {
    setRepositories(gitHubOfflineService.read());
  }, []);

  return (
    <RepositoryContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepositoryContext.Provider>
  );
};
