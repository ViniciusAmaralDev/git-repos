import { Input } from "../base/input";
import React, { forwardRef } from "react";
import { IconButton } from "../icon-button";
import { useTheme } from "@/application/contexts/ThemeContext";
import {
  ActivityIndicator,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { CloseIcon, Container, SearchButton, SearchIcon } from "./styles";

interface SearchBarProps extends TextInputProps {
  isLoading?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  clear: () => void;
  onSearch?: () => void;
}

export const SearchBar = forwardRef<any, SearchBarProps>(
  ({ value, isLoading, containerStyle, clear, onSearch, ...rest }, ref) => {
    const { theme, themeType } = useTheme();

    const isDarkMode = themeType === "dark";

    const isEmpty = value?.length === 0;

    const iconColor = !isEmpty
      ? isDarkMode
        ? theme.colors.text
        : theme.colors.primary
      : theme.colors.border;

    return (
      <Container style={containerStyle}>
        {!isEmpty && (
          <IconButton icon={<CloseIcon name="close" onPress={clear} />} />
        )}

        <Input ref={ref} {...rest} />

        {!!onSearch && (
          <SearchButton
            isActive={!isEmpty}
            icon={
              isLoading ? (
                <ActivityIndicator size="small" color={iconColor} />
              ) : (
                <SearchIcon name="search" color={iconColor} />
              )
            }
            onPress={isLoading ? undefined : onSearch}
          />
        )}
      </Container>
    );
  }
);
