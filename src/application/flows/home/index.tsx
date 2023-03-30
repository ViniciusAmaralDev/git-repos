import HomeLayout from "./layout";
import React, { useState } from "react";
import { useOwner } from "@hooks/owner";
import { Owner } from "@hooks/owner/types";
import { useTheme } from "styled-components";
import AwesomeAlert from "react-native-awesome-alerts";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";
import { useNetInfo } from "@react-native-community/netinfo";

const Home = ({
  navigation,
}: MainStackRootProps<MainStackScreensEnum.HOME>) => {
  const theme = useTheme();
  const { isConnected } = useNetInfo();

  const { owners, getOwner, deleteAllOwners } = useOwner();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const navigateToOwnerDetailsScreen = (owner: Owner) => {
    navigation.navigate(MainStackScreensEnum.OWNER_DETAILS, { owner });
  };

  const handleDeleteOwners = () => {
    setModalIsVisible(false);
    deleteAllOwners();
  };

  return (
    <>
      <HomeLayout
        owners={owners}
        handleSearch={getOwner}
        isConnected={isConnected}
        openDeleteModal={() => setModalIsVisible(true)}
        navigateToOwnerDetailsScreen={navigateToOwnerDetailsScreen}
      />

      <AwesomeAlert
        show={modalIsVisible}
        title="Remover"
        message="Deseja remover todos os usuários da sua lista? Esta ação é irreversível."
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

export default Home;
