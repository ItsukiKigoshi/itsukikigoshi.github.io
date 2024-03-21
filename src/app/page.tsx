"use client";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import { Box } from "@mui/material";

export default function App() {
  return (
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
  );
}
