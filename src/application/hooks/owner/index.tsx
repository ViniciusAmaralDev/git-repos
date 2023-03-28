import { Owner, OwnerContext } from "./types";
import { Children } from "../../../@types/Children";
import React, { createContext, useContext, useEffect, useState } from "react";
import OwnerHttpService from "infrastructure/services/owner/http";

const Context = createContext({} as OwnerContext);

export const OwnerProvider = ({ children }: Children) => {
  const httpService = new OwnerHttpService();
  const [owners, setOwners] = useState<Owner[]>([]);

  const getOwner = async (owner: string) => {
    try {
      const { data } = await httpService.getOwner(owner);
      setOwners((values) => [...values, data]);
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    getOwner("viniciusamaraldev");
  }, []);

  return <Context.Provider value={{ owners }}>{children}</Context.Provider>;
};

export const useOwner = () => useContext(Context);
