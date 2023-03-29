import React from "react";
import HomeLayout from "./layout";
import { useOwner } from "@hooks/owner";
import { Owner } from "@hooks/owner/types";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";

const Home = ({
  navigation,
}: MainStackRootProps<MainStackScreensEnum.HOME>) => {
  const { owners, getOwner } = useOwner();

  const navigateToOwnerDetailsScreen = (owner: Owner) => {
    navigation.navigate(MainStackScreensEnum.OWNER_DETAILS, { owner });
  };

  return (
    <HomeLayout
      owners={owners}
      handleSearch={getOwner}
      navigateToOwnerDetailsScreen={navigateToOwnerDetailsScreen}
    />
  );
};

export default Home;
