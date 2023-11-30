import { IRepositoryOwner } from "../models/IRepositoryOwner";
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

  const saveRepository = (repo: IRepositoryOwner) => {
    if (repositories.find((value) => value.owner === repo.owner)) {
      const filter = repositories.filter((value) => value.owner === repo.owner);
      const formatted = [...filter[0].repositories, ...repo.repositories];
      setRepositories((values) =>
        values.map((value) => ({
          ...value,
          repositories:
            value.owner === repo.owner ? formatted : value.repositories,
        }))
      );
    } else {
      setRepositories((values) => [...values, repo]);
    }
    // setRepositories((repositories) => [...repositories, ...values]);
    // gitHubOfflineService.save(values);
  };

  const fetchRepository = async (user: string) => {
    try {
      if (!isConnected) return;
      const { data } = await gitHubOnlineService.getRepository({ user });
      const response = { owner: data[0].owner.login, repositories: data };
      return response as IRepositoryOwner;
    } catch (error) {
      throw error;
    }
  };

  return { repositories, saveRepository, fetchRepository };
};
