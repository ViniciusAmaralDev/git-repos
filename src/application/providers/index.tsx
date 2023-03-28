import React from "react";
import { OwnerProvider } from "@hooks/owner";
import { Children } from "../../@types/Children";
import { RepositoryProvider } from "@hooks/repository";

export default function Providers({ children }: Children) {
  return (
    <OwnerProvider>
      <RepositoryProvider>{children}</RepositoryProvider>
    </OwnerProvider>
  );
}
