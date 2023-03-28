import GitHubApi from "infrastructure/http/GitHubApi";
import IRepositoryHttpService from "./interfaces/IRepositoryHttpService";

export default class RepositoryHttpService implements IRepositoryHttpService {
  public async getRepositories(repositoryOwner: string) {
    return GitHubApi.get(`/users/${repositoryOwner}`);
  }
}
