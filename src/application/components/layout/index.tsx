import React, { ReactNode } from "react";
import { ScrollViewProps } from "react-native";
import {
  Container,
  View,
  ScrollView,
  HeaderContainer,
  FooterContainer,
} from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/application/contexts/ThemeContext";

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
  const { top } = useSafeAreaInsets();
  const { theme, themeType } = useTheme();

  const statusBarStyle = themeType === "dark" ? "light" : "dark";

  const paddingTop = paddingTopEnabled ? top : 0;

  return (
    <Container paddingTop={paddingTop}>
      <StatusBar style={statusBarStyle} />

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
