import { Repository } from "@hooks/repository/types";

export default interface IRepositoryOfflineService {
  deleteAll: () => Promise<void>;
  getAll: () => Promise<Repository[]>;
  delete: (id: number) => Promise<void>;
  get: (id: number) => Promise<Repository>;
  save: (repository: Repository) => Promise<void>;
  update: (repository: Repository) => Promise<void>;
}
