import { gitHubApi } from "@/infrastructure/api/GitHubApi";
import { IGitHubOnlineService } from "./models/IGitHubOnlineService";

export const gitHubOnlineService: IGitHubOnlineService = {
  getRepository: ({ user }) => gitHubApi.get(`/${user}/repos`),
};
