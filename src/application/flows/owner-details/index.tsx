import React, { useState } from "react";
import OwnerDetailsLayout from "./layout";
import { useTheme } from "styled-components";
import { useRepository } from "@hooks/repository";
import AwesomeAlert from "react-native-awesome-alerts";
import { StatusRequestEnum } from "enums/StatusRequestEnum";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";
import { useOwner } from "@hooks/owner";

const OwnerDetails = ({
  route,
  navigation,
}: MainStackRootProps<MainStackScreensEnum.OWNER_DETAILS>) => {
  const theme = useTheme();

  const { owner } = route.params;
  const { deleteOwner } = useOwner();
  const { repositories, statusRequest } = useRepository();

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const filteredRepositories = repositories.filter(
    (repo) => repo.owner.login === owner.login
  );

  const handleDeleteOwners = () => {
    setModalIsVisible(false);
    navigation.goBack();
    deleteOwner(owner.id);
  };

  const navigateToImageDetailsScreen = () => {
    navigation.navigate(MainStackScreensEnum.IMAGE_DETAILS, {
      owner: owner.login,
      uri: owner.avatar_url,
    });
  };

  return (
    <>
      <OwnerDetailsLayout
        owner={owner}
        repositories={filteredRepositories}
        openDeleteModal={() => setModalIsVisible(true)}
        loading={statusRequest === StatusRequestEnum.PENDING}
        navigateToImageDetailsScreen={navigateToImageDetailsScreen}
      />

      <AwesomeAlert
        show={modalIsVisible}
        title="Remover"
        message="Tem certeza que deseja remover este usuário? Esta ação é irreversível."
        showProgress={false}
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Continuar"
        confirmButtonColor={theme.colors.BLUE}
        onConfirmPressed={handleDeleteOwners}
        showCancelButton={true}
        cancelText="Cancelar"
        cancelButtonColor={theme.colors.RED}
        onCancelPressed={() => setModalIsVisible(false)}
      />
    </>
  );
};

export default OwnerDetails;
