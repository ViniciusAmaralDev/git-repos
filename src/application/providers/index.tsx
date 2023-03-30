import React from "react";
import { OwnerProvider } from "@hooks/owner";
import { AlertProvider } from "@hooks/alert";
import { Children } from "../../@types/Children";
import { RepositoryProvider } from "@hooks/repository";

export default function Providers({ children }: Children) {
  return (
    <AlertProvider>
      <OwnerProvider>
        <RepositoryProvider>{children}</RepositoryProvider>
      </OwnerProvider>
    </AlertProvider>
  );
}
