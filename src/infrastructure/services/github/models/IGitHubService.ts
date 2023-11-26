import { IGitHubOfflineService } from "../offline/models/IGitHubOfflineService";
import { IGitHubOnlineService } from "../online/models/IGitHubOnlineService";

export interface IGitHubService {
  online: IGitHubOnlineService;
  offline: IGitHubOfflineService;
}
