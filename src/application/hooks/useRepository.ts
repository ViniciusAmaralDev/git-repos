import { useContext } from "react";
import { RepositoryContext } from "../contexts/RepositoryContext";

export const useRepository = () => {
  const { repositories, setRepositories } = useContext(RepositoryContext);

  return { repositories };
};
