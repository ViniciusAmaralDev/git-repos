import React, { PropsWithChildren } from "react";
import { RepositoryProvider } from "../contexts/RepositoryContext";

export default function Providers({ children }: PropsWithChildren) {
  return <RepositoryProvider>{children}</RepositoryProvider>;
}
