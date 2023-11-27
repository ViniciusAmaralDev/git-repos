import { useTheme } from "styled-components";
import React, { ReactNode, useState } from "react";
import { ImageBackgroundProps } from "react-native";
import { ImageBackground, LoadingIndicator } from "./styles";

interface IImageBackgroundProps extends Omit<ImageBackgroundProps, "source"> {
  uri?: string;
  icon?: ReactNode;
  loaderColor?: string;
}

export const Image = ({
  uri,
  icon,
  children,
  loaderColor,
  ...rest
}: IImageBackgroundProps) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const loadingIndicatorColor = loaderColor ?? theme.colors.placeholder;

  return (
    <ImageBackground
      source={{ uri }}
      onLoadEnd={() => setIsLoading(false)}
      onLoadStart={() => setIsLoading(true)}
      {...rest}
    >
      {icon && !isLoading && !uri && <>{icon}</>}

      {!icon && isLoading && <LoadingIndicator color={loadingIndicatorColor} />}

      {children}
    </ImageBackground>
  );
};
