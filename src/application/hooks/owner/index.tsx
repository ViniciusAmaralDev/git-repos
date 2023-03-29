import { Owner, OwnerContext } from "./types";
import { Children } from "../../../@types/Children";
import OwnerHttpService from "infrastructure/services/owner/http";
import React, { createContext, useContext, useState } from "react";
import { useAlert } from "@hooks/alert";

const Context = createContext({} as OwnerContext);

export const OwnerProvider = ({ children }: Children) => {
  const { showAlert } = useAlert();
  const httpService = new OwnerHttpService();
  const [owners, setOwners] = useState<Owner[]>([]);

  const getOwner = async (owner: string) => {
    try {
      const { data } = await httpService.getOwner(owner);
      const filtered = owners.filter((value) => value.login !== owner);
      setOwners([...filtered, data]);
    } catch (error: any) {
      showAlert({
        message:
          error.response.status === 404
            ? "Este usuário não existe!"
            : "Houve um problema, tente novamente mais tarde!",
      });
    }
  };

  return (
    <Context.Provider value={{ owners, getOwner }}>{children}</Context.Provider>
  );
};

export const useOwner = () => useContext(Context);
