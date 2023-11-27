import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { RepositoryProvider } from "../contexts/RepositoryContext";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RepositoryProvider>{children}</RepositoryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
