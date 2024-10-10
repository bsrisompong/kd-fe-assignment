import { MantineProvider } from "@mantine/core";
import { theme } from "@/styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/libs/react-query";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MantineProvider>
  );
};

export default AppProvider;
