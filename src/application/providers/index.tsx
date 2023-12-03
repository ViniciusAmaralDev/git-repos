import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ToastProvider } from "react-native-toast-notifications";
import { RepositoryProvider } from "../contexts/RepositoryContext";

const queryClient = new QueryClient();

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider
          duration={3000}
          placement="center"
          animationDuration={250}
          animationType="slide-in"
        >
          <LanguageProvider>
            <RepositoryProvider>{children}</RepositoryProvider>
          </LanguageProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
