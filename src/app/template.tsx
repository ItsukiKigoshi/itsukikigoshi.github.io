"use client";
import Footer from "@/components/Footer";
import {
  createTheme,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <Stack
          sx={{ minHeight: "100vh" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          {children}
          <Footer />
        </Stack>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
