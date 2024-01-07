"use client";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: orange,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          placeItems: "center", // Center the content horizontally and vertically
          minHeight: "100vh", // Set a minimum height to fill the entire viewport
        }}
      >
        <Main />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
