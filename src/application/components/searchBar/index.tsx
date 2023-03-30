import Input from "@components/base/input";
import { useTheme } from "styled-components";
import Button from "@components/base/button";
import React, { useRef, useState } from "react";
import { Container, SearchIcon, CloseIcon } from "./styles";
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";

type Props = TextInputProps & {
  handleClear: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const SearchBar = ({ containerStyle, handleClear, ...rest }: Props) => {
  const theme = useTheme();
  const ref = useRef<TextInput>(null);

  const [inputValue, setInputValue] = useState("");

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

  const handleClearInput = () => {
    handleClear();
    setInputValue("");
    ref.current?.clear();
  };

  return (
    <Container ref={ref} style={[{ ...shadow }, containerStyle]}>
      <SearchIcon />
      <Input
        ref={ref}
        value={inputValue}
        onChange={({ nativeEvent: { text } }) => setInputValue(text)}
        {...rest}
      />

      {inputValue.length > 0 && (
        <Button onPress={handleClearInput}>
          <CloseIcon />
        </Button>
      )}
    </Container>
  );
};

export default SearchBar;
