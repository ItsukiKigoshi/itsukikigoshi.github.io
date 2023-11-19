import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Box>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          href="https://github.com/ItsukiKigoshi/itsukikigoshi.github.io"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Source
        </Button>
        ・<Button href="/salespolicy">特定商取引法に基づく表記</Button>
      </ButtonGroup>
    </Box>
  );
}
