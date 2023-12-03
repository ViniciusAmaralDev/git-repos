import { Input } from "../base/input";
import React, { forwardRef } from "react";
import { IconButton } from "../icon-button";
import { useTheme } from "@/application/contexts/ThemeContext";
import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { CloseIcon, Container, SearchButton, SearchIcon } from "./styles";

interface SearchBarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  clear: () => void;
  onSearch?: () => void;
}

export const SearchBar = forwardRef<any, SearchBarProps>(
  ({ value, containerStyle, clear, onSearch, ...rest }, ref) => {
    const { theme } = useTheme();
    const isEmpty = value?.length === 0;

    const iconColor = !isEmpty ? theme.colors.text : theme.colors.border;

    return (
      <Container style={containerStyle}>
        {!isEmpty && (
          <IconButton icon={<CloseIcon name="close" onPress={clear} />} />
        )}

        <Input ref={ref} {...rest} />

        {!!onSearch && (
          <SearchButton
            isActive={!isEmpty}
            icon={<SearchIcon name="search" color={iconColor} />}
            onPress={onSearch}
          />
        )}
      </Container>
    );
  }
);
