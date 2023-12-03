import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "react-native-toast-notifications";
import { RepositoryProvider } from "../contexts/RepositoryContext";
import { AppSettingsProvider } from "../contexts/AppSettingsContext";

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
          <AppSettingsProvider>
            <RepositoryProvider>{children}</RepositoryProvider>
          </AppSettingsProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
