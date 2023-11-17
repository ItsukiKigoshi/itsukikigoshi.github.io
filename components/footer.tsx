import { Box, Typography } from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <Box>
      <Typography>
        <a
          href="https://github.com/ItsukiKigoshi/itsukikigoshi.github.io"
          target="_blank"
        >
          Source
        </a>
        ・<a href="/salespolicy">特定商取引法に基づく表記</a>
      </Typography>
    </Box>
  );
}
