import { mmkvDatabase } from "@/infrastructure/database/mmkv";
import { IGitHubOfflineService } from "./models/IGitHubOfflineService";

// MODELS
import { IRepositoryOwner } from "@/application/models/IRepositoryOwner";
import { IUpdateRepositoryOffline } from "./models/IUpdateRepositoryOffline";

const addRepository = (value: IRepositoryOwner) => {
  const repositories = readRepositories();
  mmkvDatabase.set("repositories", JSON.stringify([...repositories, value]));
};

const saveRepositories = (values: IRepositoryOwner[]) => {
  mmkvDatabase.set("repositories", JSON.stringify(values));
};

const readRepositories = (): IRepositoryOwner[] => {
  return JSON.parse(mmkvDatabase.getString("repositories") ?? "[]");
};

const deleteRepository = (owner: string) => {
  saveRepositories(readRepositories().filter((repo) => repo.owner !== owner));
};

const updateRepository = ({
  owner,
  repositories,
}: IUpdateRepositoryOffline) => {
  readRepositories()
    .map((value) => ({
      ...value,
      repositories: value.owner === owner ? repositories : value.repositories,
    }))
    .map((value) => saveRepositories(value));
};

export const mmkvService: IGitHubOfflineService = {
  add: addRepository,
  save: saveRepositories,
  read: readRepositories,
  delete: deleteRepository,
  update: updateRepository,
};
