"use client";

import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { resolver, theme } from "@/styles/theme";

import { queryClient } from "@/libs/react-query";
import { persistor, store } from "@/stores";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </MantineProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default AppProvider;
