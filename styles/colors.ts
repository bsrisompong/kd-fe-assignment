import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";

export const blue = {
  100: "#edf0fd",
  200: "#d7dcf4",
  300: "#aab6ec",
  400: "#7b8de4",
  500: "#556bde",
  600: "#3e55db",
  700: "#324adb",
  800: "#263cc2",
  900: "#1f35ae",
  950: "#142d99",
};

export const red = {
  100: "#fff5f5",
  200: "#ffe3e3",
  300: "#ffc9c9",
  400: "#ffa8a8",
  500: "#ff8787",
  600: "#ff6b6b",
  700: "#fa5252",
  800: "#f03e3e",
  900: "#e03131",
  950: "#c92a2a",
};

export const lime = {
  100: "#f4fce3",
  200: "#e9fac8",
  300: "#d8f5a2",
  400: "#c0eb75",
  500: "#a9e34b",
  600: "#94d82d",
  700: "#82c91e",
  800: "#74b816",
  900: "#66a80f",
  950: "#5c940d",
};

export const yellow = {
  100: "#fff9db",
  200: "#fff3bf",
  300: "#ffec99",
  400: "#ffe066",
  500: "#ffd43b",
  600: "#fcc419",
  700: "#fab005",
  800: "#f59f00",
  900: "#f08c00",
  950: "#e67700",
};

export const orange = {
  100: "#fff4e6",
  200: "#ffe8cc",
  300: "#ffd8a8",
  400: "#ffc078",
  500: "#ffa94d",
  600: "#ff922b",
  700: "#fd7e14",
  800: "#f76707",
  900: "#e8590c",
  950: "#d9480f",
};

export const gray = {
  100: "#f8f9fa",
  200: "#f1f3f5",
  300: "#e9ecef",
  400: "#dee2e6",
  500: "#ced4da",
  600: "#adb5bd",
  700: "#868e96",
  800: "#495057",
  900: "#343a40",
  950: "#212529",
};

export const customColor: Partial<Record<DefaultMantineColor, MantineColorsTuple>> = {
  blue: [
    blue[100],
    blue[200],
    blue[300],
    blue[400],
    blue[500],
    blue[600],
    blue[700],
    blue[800],
    blue[900],
    blue[950],
  ],
  red: [
    red[100],
    red[200],
    red[300],
    red[400],
    red[500],
    red[600],
    red[700],
    red[800],
    red[900],
    red[950],
  ],
  lime: [
    lime[100],
    lime[200],
    lime[300],
    lime[400],
    lime[500],
    lime[600],
    lime[700],
    lime[800],
    lime[900],
    lime[950],
  ],
  yellow: [
    yellow[100],
    yellow[200],
    yellow[300],
    yellow[400],
    yellow[500],
    yellow[600],
    yellow[700],
    yellow[800],
    yellow[900],
    yellow[950],
  ],
  orange: [
    orange[100],
    orange[200],
    orange[300],
    orange[400],
    orange[500],
    orange[600],
    orange[700],
    orange[800],
    orange[900],
    orange[950],
  ],
  gray: [
    gray[100],
    gray[200],
    gray[300],
    gray[400],
    gray[500],
    gray[600],
    gray[700],
    gray[800],
    gray[900],
    gray[950],
  ],
};
