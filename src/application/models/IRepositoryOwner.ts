import { IRepository } from "./IRepository";

export interface IRepositoryOwner {
  owner: string;
  isFavorite?: boolean;
  repositories: IRepository[];
}
