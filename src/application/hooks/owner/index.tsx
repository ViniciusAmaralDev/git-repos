import { Owner, OwnerContext } from "./types";
import { Children } from "../../../@types/Children";
import OwnerHttpService from "infrastructure/services/owner/http";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAlert } from "@hooks/alert";
import OwnerOfflineService from "infrastructure/services/owner/offline";
import { useNetInfo } from "@react-native-community/netinfo";

const Context = createContext({} as OwnerContext);

export const OwnerProvider = ({ children }: Children) => {
  const { showAlert } = useAlert();
  const { isConnected } = useNetInfo();

  const httpService = new OwnerHttpService();
  const offlineService = new OwnerOfflineService();

  const [owners, setOwners] = useState<Owner[]>([]);

  const getOwner = async (owner: string) => {
    if (!isConnected) return;

    try {
      const { data } = await httpService.getOwner(owner);
      setOwners((owners) => [...owners, data]);
      await offlineService.save(data);
    } catch (error: any) {
      console.log(error);
      showAlert({
        message:
          error.code === "ERR_BAD_REQUEST"
            ? "Este usuário não existe!"
            : "Houve um problema, tente novamente mais tarde!",
      });
    }
  };

  const deleteAllOwners = async () => {
    setOwners([]);
    await offlineService.deleteAll();
  };

  const deleteOwner = async (id: number) => {
    await offlineService.delete(id);
    setOwners((owners) => owners.filter((owner) => owner.id !== id));
  };

  useEffect(() => {
    (async () => {
      const owners = await offlineService.getAll();
      setOwners(owners);
    })();
  }, []);

  return (
    <Context.Provider
      value={{ owners, getOwner, deleteOwner, deleteAllOwners }}
    >
      {children}
    </Context.Provider>
  );
};

export const useOwner = () => useContext(Context);
