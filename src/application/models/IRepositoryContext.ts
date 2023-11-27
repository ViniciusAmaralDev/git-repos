import { IRepository } from "./IRepository";

export interface IRepositoryContext {
  repositories: IRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepository[]>>;
}
