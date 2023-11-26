import { AxiosResponse } from "axios";
import { IGetReposOnlineRequest } from "./request/IGetReposOnlineRequest";
import { IGetReposOnlineResponse } from "./response/IGetReposOnlineResponse";

export interface IGitHubOnlineService {
  getRepos: (
    value: IGetReposOnlineRequest
  ) => Promise<AxiosResponse<IGetReposOnlineResponse>>;
}
