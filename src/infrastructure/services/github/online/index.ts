import { gitHubApi } from "@/infrastructure/api/GitHubApi";
import { IGitHubOnlineService } from "./models/IGitHubOnlineService";

export const gitHubOnlineService: IGitHubOnlineService = {
  getRepos: ({ user }) => gitHubApi.get(`/${user}/repos`),
};
