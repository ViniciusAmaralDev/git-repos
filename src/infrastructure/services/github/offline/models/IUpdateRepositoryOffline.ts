import { IRepository } from "@/application/models/IRepository";

export interface IUpdateRepositoryOffline {
  owner: string;
  repositories: IRepository[];
}
