import { Keyboard } from "react-native";
import { IRepositoryOwner } from "../models/IRepositoryOwner";
import { RepositoryContext } from "../contexts/RepositoryContext";

// HOOKS
import { useTranslation } from "react-i18next";
import { useCallback, useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import { useNetInfo } from "@react-native-community/netinfo";

// SERVICES
import { gitHubOfflineService } from "@/infrastructure/services/github/offline";
import { gitHubOnlineService } from "@/infrastructure/services/github/online";

export const useRepository = () => {
  const toast = useToast();
  const { t } = useTranslation();
  const { isConnected } = useNetInfo();
  const { repositories, setRepositories } = useContext(RepositoryContext);

  const addRepository = useCallback(
    (repo: IRepositoryOwner) => {
      if (repositories.find((value) => value.owner === repo.owner)) {
        setRepositories((values) =>
          values.map((value) => ({
            ...value,
            isFavorite: false,
            repositories:
              value.owner === repo.owner
                ? repo.repositories
                : value.repositories,
          }))
        );
        gitHubOfflineService.update(repo);
      } else {
        setRepositories((values) => [...values, repo]);
        gitHubOfflineService.add(repo);
      }
    },
    [repositories]
  );

  const fetchRepository = useCallback(
    async (user: string) => {
      try {
        Keyboard.dismiss();

        if (!isConnected) {
          toast.show(t("no internet connection"));
          return;
        }

        const { data } = await gitHubOnlineService.getRepository({ user });
        const response = { owner: data[0].owner.login, repositories: data };
        return response as IRepositoryOwner;
      } catch (error) {
        toast.show(t("user not found"));
      }
    },
    [repositories]
  );

  const deleteRepository = useCallback(
    (owner: string) => {
      setRepositories((values) =>
        values.filter((value) => value.owner !== owner)
      );
      gitHubOfflineService.delete(owner);
    },
    [repositories]
  );

  const handleFavoriteRepository = (owner: string) => {
    const updated = repositories.map((value) => ({
      ...value,
      isFavorite: value.owner === owner ? !value.isFavorite : value.isFavorite,
    }));

    setRepositories(updated);
    gitHubOfflineService.save(updated);
  };

  return {
    repositories,
    addRepository,
    fetchRepository,
    deleteRepository,
    handleFavoriteRepository,
  };
};
