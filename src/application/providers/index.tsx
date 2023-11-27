import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RepositoryProvider } from "../contexts/RepositoryContext";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <RepositoryProvider>{children}</RepositoryProvider>
    </QueryClientProvider>
  );
}
