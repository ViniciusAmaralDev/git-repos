import { useAlert } from "@hooks/alert";
import { Children } from "../../../@types/Children";
import { Repository, RepositoryContext } from "./types";
import { StatusRequestEnum } from "enums/StatusRequestEnum";
import { useNetInfo } from "@react-native-community/netinfo";
import React, { createContext, useContext, useEffect, useState } from "react";
import RepositoryHttpService from "infrastructure/services/repository/http";
import RepositoryOfflineService from "infrastructure/services/repository/offline";
import { useOwner } from "@hooks/owner";

const Context = createContext({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const { owners } = useOwner();
  const { showAlert } = useAlert();
  const { isConnected } = useNetInfo();

  const httpService = new RepositoryHttpService();
  const offlineService = new RepositoryOfflineService();

  const [statusRequest, setStatusRequest] = useState(
    StatusRequestEnum.STAND_BY
  );

  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getRepositories = async (owner: string) => {
    if (!isConnected) return;

    setStatusRequest(StatusRequestEnum.PENDING);
    try {
      const { data } = await httpService.getRepositories(owner);

      setRepositories((repositories) => [...repositories, ...data]);

      await Promise.all(
        data.map(async (repo) => {
          const repoOffline = await offlineService.get(repo.id);
          if (repoOffline) return offlineService.update(repo);
          else return offlineService.save(repo);
        })
      );
      setStatusRequest(StatusRequestEnum.DONE);
    } catch (error: any) {
      console.log(error);
      setStatusRequest(StatusRequestEnum.ERROR);
      showAlert({
        message: "Não foi possível obter os repositórios deste usuário",
      });
    }
  };

  useEffect(() => {
    (async () => {
      const repositories = await offlineService.getAll();
      setRepositories(repositories);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all(owners.map((owner) => getRepositories(owner.login)));
    })();
  }, [owners]);

  return (
    <Context.Provider value={{ repositories, statusRequest, getRepositories }}>
      {children}
    </Context.Provider>
  );
};

export const useRepository = () => useContext(Context);
