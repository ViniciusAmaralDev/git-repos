import { onlineManager } from "react-query";
import { IRepository } from "../models/IRepository";
import NetInfo from "@react-native-community/netinfo";
import { IRepositoryContext } from "../models/IRepositoryContext";
import { gitHubOfflineService } from "@/infrastructure/services/github/offline";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";

onlineManager.setEventListener((setOnline) =>
  NetInfo.addEventListener(({ isConnected }) => setOnline(isConnected))
);

export const RepositoryContext = createContext({} as IRepositoryContext);

export const RepositoryProvider = ({ children }: PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    setRepositories(gitHubOfflineService.read());
  }, []);

  return (
    <RepositoryContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepositoryContext.Provider>
  );
};
