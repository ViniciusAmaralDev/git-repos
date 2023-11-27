import { Input } from "../base/input";
import React, { forwardRef, useRef, useState } from "react";
import { IconButton } from "../icon-button";
import { CloseIcon, Container, SearchIcon } from "./styles";
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";

interface SearchBarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  clear: () => void;
}

export const SearchBar = forwardRef<any, SearchBarProps>(
  ({ value, containerStyle, clear, ...rest }, ref) => {
    return (
      <Container style={containerStyle}>
        <SearchIcon name="search" />

        <Input ref={ref} {...rest} />

        {value?.length > 0 && (
          <IconButton icon={<CloseIcon name="close" onPress={clear} />} />
        )}
      </Container>
    );
  }
);
