import { Repository } from "@hooks/repository/types";
import { getRealm } from "infrastructure/offline/realm";
import IRepositoryOfflineService from "./interfaces/IRepositoryOfflineService";
import { repositorySchema } from "infrastructure/offline/realm/schemas/Repository";

export default class RepositoryOfflineService
  implements IRepositoryOfflineService
{
  public async deleteAll() {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects(repositorySchema.name));
    });
  }

  public async get(id: number) {
    const realm = await getRealm();
    return realm.objectForPrimaryKey(
      repositorySchema.name,
      id
    ) as any as Repository;
  }

  public async getAll() {
    const realm = await getRealm();
    return realm.objects(repositorySchema.name) as any as Repository[];
  }

  public async delete(id: number) {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(repositorySchema.name, id));
    });
  }

  public async save(repository: Repository) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(repositorySchema.name, repository);
    });
  }

  public async update(repository: Repository) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(
        repositorySchema.name,
        repository,
        Realm.UpdateMode.Modified
      );
    });
  }
}
