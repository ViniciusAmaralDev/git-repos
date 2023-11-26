import { gitHubOfflineService } from "./offline";
import { gitHubOnlineService } from "./online";
import { IGitHubService } from "./models/IGitHubService";

export const gitHubService: IGitHubService = {
  online: gitHubOnlineService,
  offline: gitHubOfflineService,
};
