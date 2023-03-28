import { OwnerProvider } from "@hooks/owner";
import { RepositoryProvider } from "@hooks/repository";
import React from "react";
import MainRoute from "./routes";

export default function App() {
  return (
    <OwnerProvider>
      <RepositoryProvider>
        <MainRoute />
      </RepositoryProvider>
    </OwnerProvider>
  );
}
