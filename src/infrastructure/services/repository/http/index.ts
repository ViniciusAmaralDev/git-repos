import { Repository } from "@hooks/repository/types";
import { AxiosPromise } from "axios";
import GitHubApi from "infrastructure/http/GitHubApi";
import IRepositoryHttpService from "./interfaces/IRepositoryHttpService";

export default class RepositoryHttpService implements IRepositoryHttpService {
  public async getRepositories(
    repositoryOwner: string
  ): AxiosPromise<Repository[]> {
    return GitHubApi.get(`/users/${repositoryOwner}/repos`);
  }
}
