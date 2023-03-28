import React, { useState } from "react";
import { useTheme } from "styled-components";
import { ImageBackground, ChangeButton, CameraIcon } from "./styles";
import {
  ActivityIndicator,
  ImageBackgroundProps,
  ActivityIndicatorProps,
} from "react-native";

type Props = ImageBackgroundProps & {
  loadProps: ActivityIndicatorProps;
  onPressChangeImageButton?: () => void;
};

const ProfilePicture = ({
  loadProps,
  onPressChangeImageButton,
  ...rest
}: Props) => {
  const theme = useTheme();
  const [load, setLoad] = useState(false);

  const shadow = {
    shadowColor: theme.colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  };

  return (
    <ImageBackground
      resizeMode="contain"
      onLoadEnd={() => setLoad(false)}
      onLoadStart={() => setLoad(true)}
      {...rest}
    >
      {load ? (
        <ActivityIndicator {...loadProps} />
      ) : onPressChangeImageButton ? (
        <ChangeButton onPress={onPressChangeImageButton} style={{ ...shadow }}>
          <CameraIcon />
        </ChangeButton>
      ) : (
        <></>
      )}
    </ImageBackground>
  );
};

export default ProfilePicture;
