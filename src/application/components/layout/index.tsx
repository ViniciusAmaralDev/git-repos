import React from "react";
import { Container, ScrollView } from "./styles";
import { Platform, ScrollViewProps, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = ScrollViewProps & {
  header?: JSX.Element;
};

const Layout = ({ header, children, scrollEnabled, ...rest }: Props) => {
  const { top, bottom } = useSafeAreaInsets();

  const isIosPlatform = Platform.OS === "ios";
  const paddingTop = isIosPlatform ? top : 0;
  const paddingBottom = isIosPlatform ? bottom : 0;

  return (
    <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
      {header && <>{header}</>}
      {scrollEnabled ? (
        <ScrollView showsVerticalScrollIndicator={false} {...rest}>
          {children}
        </ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}
    </Container>
  );
};

export default Layout;
