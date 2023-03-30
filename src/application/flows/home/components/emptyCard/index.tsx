import React from "react";
import { Container, Label, Button } from "./styles";

type Props = {
  showSearchButton?: boolean;
  ownerListIsEmpty?: boolean;
  onPressSearchButton: () => Promise<void>
};

const EmptyCard = ({
  showSearchButton,
  ownerListIsEmpty,
  onPressSearchButton,
}: Props) => {
  return (
    <Container>
      <Label>
        {ownerListIsEmpty
          ? "Sua lista está vazia!"
          : "Nenhum resultado encontrado. "}
      </Label>

      {showSearchButton && (
        <Button onPress={onPressSearchButton}>
          <Label secondary>Buscar</Label>
        </Button>
      )}
    </Container>
  );
};

export default EmptyCard;
