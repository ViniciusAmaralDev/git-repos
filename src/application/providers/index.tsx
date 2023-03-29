import React from "react";
import { OwnerProvider } from "@hooks/owner";
import { Children } from "../../@types/Children";
import { RepositoryProvider } from "@hooks/repository";
import { AlertProvider } from "@hooks/alert";

export default function Providers({ children }: Children) {
  return (
    <AlertProvider>
      <OwnerProvider>
        <RepositoryProvider>{children}</RepositoryProvider>
      </OwnerProvider>
    </AlertProvider>
  );
}
