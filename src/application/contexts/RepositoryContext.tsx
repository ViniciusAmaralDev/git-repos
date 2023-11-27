import { IRepository } from "../models/IRepository";
import { IRepositoryContext } from "../models/IRepositoryContext";
import React, { PropsWithChildren, createContext, useState } from "react";

export const RepositoryContext = createContext({} as IRepositoryContext);

export const RepositoryProvider = ({ children }: PropsWithChildren) => {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  return (
    <RepositoryContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepositoryContext.Provider>
  );
};
