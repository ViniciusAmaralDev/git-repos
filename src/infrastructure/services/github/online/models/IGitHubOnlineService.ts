import { AxiosResponse } from "axios";
import { IGetReposOnlineRequest } from "./request/IGetReposOnlineRequest";
import { IGetReposOnlineResponse } from "./response/IGetReposOnlineResponse";

export interface IGitHubOnlineService {
  getRepository: (
    value: IGetReposOnlineRequest
  ) => Promise<AxiosResponse<IGetReposOnlineResponse[]>>;
}
