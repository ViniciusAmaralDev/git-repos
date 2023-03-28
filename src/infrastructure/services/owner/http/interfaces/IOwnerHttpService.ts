import { AxiosPromise } from "axios";
import { Owner } from "@hooks/owner/types";

export default interface IOwnerHttpService {
  getOwner: (owner: string) => AxiosPromise<Owner>;
}
