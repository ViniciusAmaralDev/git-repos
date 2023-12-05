import { Keyboard } from "react-native";
import { IRepositoryOwner } from "../models/IRepositoryOwner";
import { RepositoryContext } from "../contexts/RepositoryContext";

// HOOKS
import { useTranslation } from "react-i18next";
import { useCallback, useContext } from "react";
import { useToast } from "react-native-toast-notifications";

// SERVICES
import { gitHubOfflineService } from "@/infrastructure/services/github/offline";
import { gitHubOnlineService } from "@/infrastructure/services/github/online";

export const useRepository = () => {
  const toast = useToast();
  const { t } = useTranslation();
  const { repositories, setRepositories } = useContext(RepositoryContext);

  const addRepository = useCallback(
    (repo: IRepositoryOwner) => {
      try {
        if (repositories?.find((value) => value?.owner === repo?.owner)) {
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
      } catch (error) {
        throw error;
      }
    },
    [repositories]
  );

  const fetchRepository = useCallback(
    async (user: string) => {
      try {
        Keyboard.dismiss();

        const { data } = await gitHubOnlineService.getRepository({ user });
        addRepository({ repositories: data, owner: data[0]?.owner?.login });
      } catch (error: any) {
        const errors = {
          404: "user not found",
          502: "no internet connection",
        };

        toast.show(t(errors[error?.status] ?? "user not found"));
        return;
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
    fetchRepository,
    deleteRepository,
    handleFavoriteRepository,
  };
};
