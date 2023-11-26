import { IRepository } from "@/application/models/IRepository";

export interface IGitHubOfflineService {
  read: () => IRepository[];
  delete: (id: number) => void;
  save: (repositories: IRepository[]) => void;
}
