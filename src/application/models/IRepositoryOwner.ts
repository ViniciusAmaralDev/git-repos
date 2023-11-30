import { IRepository } from "./IRepository";

export interface IRepositoryOwner {
  owner: string;
  repositories: IRepository[];
}
