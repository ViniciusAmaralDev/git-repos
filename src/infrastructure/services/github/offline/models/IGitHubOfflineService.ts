import { IUpdateRepositoryOffline } from "./IUpdateRepositoryOffline";
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";

export interface IGitHubOfflineService {
  read: () => IRepositoryOwner[];
  delete: (owner: string) => void;
  add: (repository: IRepositoryOwner) => void;
  save: (repositories: IRepositoryOwner[]) => void;
  update: (values: IUpdateRepositoryOffline) => void;
}
