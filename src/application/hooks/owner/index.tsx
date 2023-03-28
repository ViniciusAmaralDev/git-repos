import { Owner, OwnerContext } from "./types";
import { Children } from "../../../@types/Children";
import OwnerHttpService from "infrastructure/services/owner/http";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({} as OwnerContext);

export const OwnerProvider = ({ children }: Children) => {
  const httpService = new OwnerHttpService();
  const [owners, setOwners] = useState<Owner[]>([]);

  const getOwner = async (owner: string) => {
    try {
      const { data } = await httpService.getOwner(owner);
      setOwners((values) => [...values, data]);
    } catch (error: any) {
      console.log("ERROR =>", error);
      throw error;
    }
  };

  useEffect(() => {
    getOwner("viniciusamaraldev");
  }, []);

  return (
    <Context.Provider value={{ owners, getOwner }}>{children}</Context.Provider>
  );
};

export const useOwner = () => useContext(Context);
