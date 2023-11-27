import { IRepository } from "../models/IRepository";
import { RepositoryContext } from "../contexts/RepositoryContext";

// HOOKS
import { useContext } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

// SERVICES
import { gitHubOfflineService } from "@/infrastructure/services/github/offline";
import { gitHubOnlineService } from "@/infrastructure/services/github/online";

export const useRepository = () => {
  const { isConnected } = useNetInfo();
  const { repositories, setRepositories } = useContext(RepositoryContext);

  const saveRepository = (values: IRepository[]) => {
    setRepositories(values);
    gitHubOfflineService.save(values);
  };

  const fetchRepository = async (user: string) => {
    if (!isConnected) return;
    const { data } = await gitHubOnlineService.getRepository({ user });
    saveRepository(data);
  };

  return { repositories, fetchRepository };
};
