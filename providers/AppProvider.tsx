"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";

import { resolver, theme } from "@/styles/theme";

import { queryClient } from "@/libs/react-query";
import { store } from "@/stores";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <MantineProvider theme={theme} cssVariablesResolver={resolver}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </MantineProvider>
    </ReduxProvider>
  );
};

export default AppProvider;
