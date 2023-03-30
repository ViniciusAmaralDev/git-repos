import { Owner } from "@hooks/owner/types";

export default interface IOwnerOfflineService {
  getAll: () => Promise<Owner[]>;
  deleteAll: () => Promise<void>;
  delete: (id: number) => Promise<void>;
  save: (owner: Owner) => Promise<void>;
}
