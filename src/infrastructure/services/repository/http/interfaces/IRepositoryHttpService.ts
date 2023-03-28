import { AxiosPromise } from "axios";
import { Repository } from "@hooks/repository/types";

export default interface IRepositoryHttpService {
  getRepositories: (repositoryOwner: string) => AxiosPromise<Repository[]>;
}
