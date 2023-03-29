import React, { useEffect } from "react";
import OwnerDetailsLayout from "./layout";
import { useRepository } from "@hooks/repository";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";
import { StatusRequestEnum } from "enums/StatusRequestEnum";

const OwnerDetails = ({
  route,
}: MainStackRootProps<MainStackScreensEnum.OWNER_DETAILS>) => {
  const { owner } = route.params;
  const { repositories, statusRequest, getRepositories } = useRepository();

  const filteredRepositories = repositories.filter(
    (repo) => repo.owner.login === owner.login
  );

  useEffect(() => {
    getRepositories(owner.login);
  }, []);

  return (
    <OwnerDetailsLayout
      owner={owner}
      repositories={filteredRepositories}
      loading={statusRequest === StatusRequestEnum.PENDING}
    />
  );
};

export default OwnerDetails;
