import { Children } from "../../../@types/Children";
import { Repository, RepositoryContext } from "./types";
import { useNetInfo } from "@react-native-community/netinfo";
import RepositoryHttpService from "infrastructure/services/repository/http";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({} as RepositoryContext);

export const RepositoryProvider = ({ children }: Children) => {
  const { isConnected } = useNetInfo();
  const httpService = new RepositoryHttpService();

  const [repositories, setRepositories] = useState<Repository[]>([]);

  const getRepositories = async () => {
    try {
      const { data } = await httpService.getRepositories("viniciusamaraldev");
      setRepositories(data);
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    // getRepositories();
  }, []);

  return (
    <Context.Provider value={{ repositories }}>{children}</Context.Provider>
  );
};

export const useRepository = () => useContext(Context);

const a = {
  avatar_url: "https://avatars.githubusercontent.com/u/93560235?v=4",
  bio: "Desenvolvedor React Native",
  blog: "",
  company: "Bov Control",
  created_at: "2021-11-02T00:51:41Z",
  email: null,
  events_url: "https://api.github.com/users/ViniciusAmaralDev/events{/privacy}",
  followers: 1,
  followers_url: "https://api.github.com/users/ViniciusAmaralDev/followers",
  following: 3,
  following_url:
    "https://api.github.com/users/ViniciusAmaralDev/following{/other_user}",
  gists_url: "https://api.github.com/users/ViniciusAmaralDev/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/ViniciusAmaralDev",
  id: 93560235,
  location: "São Luís - MA",
  login: "ViniciusAmaralDev",
  name: "Vinicius Amaral",
  node_id: "U_kgDOBZOdqw",
  organizations_url: "https://api.github.com/users/ViniciusAmaralDev/orgs",
  public_gists: 0,
  public_repos: 4,
  received_events_url:
    "https://api.github.com/users/ViniciusAmaralDev/received_events",
  repos_url: "https://api.github.com/users/ViniciusAmaralDev/repos",
  site_admin: false,
  starred_url:
    "https://api.github.com/users/ViniciusAmaralDev/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/ViniciusAmaralDev/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2023-01-14T01:34:47Z",
  url: "https://api.github.com/users/ViniciusAmaralDev",
};
