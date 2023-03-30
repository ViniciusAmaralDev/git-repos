import { Owner } from "@hooks/owner/types";
import { getRealm } from "infrastructure/offline/realm";
import IOwnerOfflineService from "./interfaces/IOwnerOfflineService";
import { ownerSchema } from "infrastructure/offline/realm/schemas/Owner";

export default class OwnerOfflineService implements IOwnerOfflineService {
  public async getAll() {
    const realm = await getRealm();
    return realm.objects(ownerSchema.name) as any as Owner[];
  }

  public async deleteAll() {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects(ownerSchema.name));
    });
  }

  public async delete(id: number) {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objectForPrimaryKey(ownerSchema.name, id));
    });
  }

  public async save(owner: Owner) {
    const realm = await getRealm();
    realm.write(() => {
      realm.create(ownerSchema.name, owner);
    });
  }
}
