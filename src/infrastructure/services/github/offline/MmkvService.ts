import { mmkvDatabase } from "@/infrastructure/database/mmkv";
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";
import { IGitHubOfflineService } from "./models/IGitHubOfflineService";

const saveRepositories = (values: IRepositoryOwner[]) => {
  const repositories = readRepositories();
  const formattedRepositories = JSON.stringify([...repositories, ...values]);
  mmkvDatabase.set("repositories", formattedRepositories);
};

const readRepositories = (): IRepositoryOwner[] => {
  return JSON.parse(mmkvDatabase.getString("repositories") ?? "[]");
};

const deleteRepository = (owner: string) => {
  const repositories = readRepositories();
  saveRepositories(repositories.filter((repo) => repo.owner !== owner));
};

export const mmkvService: IGitHubOfflineService = {
  save: saveRepositories,
  read: readRepositories,
  delete: deleteRepository,
};
