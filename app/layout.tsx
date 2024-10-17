import "@mantine/core/styles.css";
import "@/styles/global.css";
import AppProvider from "@/providers/AppProvider";

export const metadata = {
  title: "GIPHY - Search",
  description: "This is a assignment for Frontend Developer test at Kaidee Thailand!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
