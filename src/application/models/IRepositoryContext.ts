import { IRepositoryOwner } from "./IRepositoryOwner";

export interface IRepositoryContext {
  repositories: IRepositoryOwner[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepositoryOwner[]>>;
}
