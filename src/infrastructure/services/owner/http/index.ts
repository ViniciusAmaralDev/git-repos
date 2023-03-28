import GitHubApi from "infrastructure/http/GitHubApi";
import IOwnerHttpService from "./interfaces/IOwnerHttpService";

export default class OwnerHttpService implements IOwnerHttpService {
  public async getOwner(owner: string) {
    return GitHubApi.get(`/users/${owner}`);
  }
}
