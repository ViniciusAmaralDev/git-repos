import { mmkvDatabase } from "@/infrastructure/database/mmkv";
import { IRepository } from "@/application/models/IRepository";
import { IGitHubOfflineService } from "./models/IGitHubOfflineService";

const saveRepositories = (repositories: IRepository[]) => {
  mmkvDatabase.set("repositories", JSON.stringify(repositories));
};

const readRepositories = (): IRepository[] => {
  return JSON.parse(mmkvDatabase.getString("repositories") ?? "[]");
};

const deleteRepository = (id: number) => {
  const repositories = readRepositories();
  saveRepositories(repositories.filter((repo) => repo.id !== id));
};

export const mmkvService: IGitHubOfflineService = {
  save: saveRepositories,
  read: readRepositories,
  delete: deleteRepository,
};
