import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";

export interface IGitHubOfflineService {
  read: () => IRepositoryOwner[];
  delete: (owner: string) => void;
  save: (repositories: IRepositoryOwner[]) => void;
}
