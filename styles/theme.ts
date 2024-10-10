"use client";

import { primary } from "./colors";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    primary: [
      primary[100],
      primary[200],
      primary[300],
      primary[400],
      primary[500],
      primary[600],
      primary[700],
      primary[800],
      primary[900],
      primary[950],
    ],
  },
});
