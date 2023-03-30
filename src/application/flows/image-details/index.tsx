import React from "react";
import * as Sharing from "expo-sharing";
import ImageDetailsLayout from "./layout";
import * as FileSystem from "expo-file-system";
import { MainStackRootProps } from "application/routes/types/MainStack";
import { MainStackScreensEnum } from "application/routes/enums/MainStackEnum";

const ImageDetails = ({
  route,
}: MainStackRootProps<MainStackScreensEnum.IMAGE_DETAILS>) => {
  const { owner, uri } = route.params;

  const handleShare = async () => {
    const path = FileSystem.documentDirectory + `/${owner}.png`;
    try {
      const { uri: uriShare } = await FileSystem.downloadAsync(uri, path);
      await Sharing.shareAsync(uriShare);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ImageDetailsLayout owner={owner} uri={uri} handleShare={handleShare} />
  );
};

export default ImageDetails;
