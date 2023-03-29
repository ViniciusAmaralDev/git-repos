import { Children } from "../../../@types/Children";
import { Repository, RepositoryContext } from "./types";
import { useNetInfo } from "@react-native-community/netinfo";
import RepositoryHttpService from "infrastructure/services/repository/http";
import React, { createContext, useContext, useEffect, useState } from "react";
import { StatusRequestEnum } from "enums/StatusRequestEnum";
import { useAlert } from "@hooks/alert";

const Context = createContext({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const { showAlert } = useAlert();
  const { isConnected } = useNetInfo();
  const httpService = new RepositoryHttpService();

  const [statusRequest, setStatusRequest] = useState(
    StatusRequestEnum.STAND_BY
  );

  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getRepositories = async (owner: string) => {
    setStatusRequest(StatusRequestEnum.PENDING);
    try {
      const { data } = await httpService.getRepositories(owner);
      const filteredRepositories = repositories.filter(
        (repo) => repo.owner.login !== owner
      );
      setRepositories([...filteredRepositories, ...data]);
      setStatusRequest(StatusRequestEnum.DONE);
    } catch (error: any) {
      setStatusRequest(StatusRequestEnum.ERROR);
      showAlert({
        message: "Não foi possível obter os repositórios deste usuário",
      });
    }
  };

  return (
    <Context.Provider value={{ repositories, statusRequest, getRepositories }}>
      {children}
    </Context.Provider>
  );
};

export const useRepository = () => useContext(Context);
