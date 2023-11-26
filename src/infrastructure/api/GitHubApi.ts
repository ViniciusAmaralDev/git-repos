import axios from "axios";
import { GITHUB_API_URL } from "@env";

export const gitHubApi = axios.create({
  baseURL: GITHUB_API_URL,
});
