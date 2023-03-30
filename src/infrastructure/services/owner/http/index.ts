import { Owner } from "@hooks/owner/types";
import { AxiosPromise } from "axios";
import GitHubApi from "infrastructure/http/GitHubApi";
import IOwnerHttpService from "./interfaces/IOwnerHttpService";

export default class OwnerHttpService implements IOwnerHttpService {
  public async getOwner(owner: string): AxiosPromise<Owner> {
    return GitHubApi.get(`/users/${owner}`);
  }
}
