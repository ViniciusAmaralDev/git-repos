import { AxiosPromise } from "axios";
import { Repository } from "@hooks/repository/types";

export default interface IRepositoryHttpService {
  getRepositories: (owner: string) => AxiosPromise<Repository[]>;
}
