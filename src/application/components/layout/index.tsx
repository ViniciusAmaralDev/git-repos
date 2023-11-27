import React, { ReactNode } from "react";
import { ScrollViewProps } from "react-native";
import { Container, View, ScrollView, HeaderContainer, FooterContainer } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

interface ILayoutProps extends ScrollViewProps {
  paddingTopEnabled?: boolean;
  header?: React.ReactNode | JSX.Element;
  footer?: ReactNode;
}

export const Layout = ({
  header,
  footer,
  children,
  scrollEnabled,
  paddingTopEnabled = false,
  ...rest
}: ILayoutProps) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopEnabled ? top : 0;

  return (
    <Container paddingTop={paddingTop}>
      <StatusBar style="dark" backgroundColor={theme.colors.primary} />

      {header && <HeaderContainer>{header}</HeaderContainer>}

      {scrollEnabled ? (
        <ScrollView {...rest}>{children}</ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}

      {footer && <FooterContainer>{footer}</FooterContainer>}
    </Container>
  );
};
