import Realm from "realm";
import schema from "./schemas";

export const getRealm = async () =>
  await Realm.open({ path: "git-repos", schema, schemaVersion: 1 });
