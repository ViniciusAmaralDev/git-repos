import React from "react";
import Header from "@components/header";
import { Container, Image, Button, ShareIcon } from "./styles";

type Props = { owner: string; uri: string; handleShare: () => Promise<void> };

const ImageDetailsLayout = ({ owner, uri, handleShare }: Props) => {
  return (
    <Container
      header={
        <Header
          title={owner}
          rightContainer={
            <Button onPress={handleShare}>
              <ShareIcon />
            </Button>
          }
        />
      }
    >
      <Image source={{ uri }} />
    </Container>
  );
};

export default ImageDetailsLayout;
