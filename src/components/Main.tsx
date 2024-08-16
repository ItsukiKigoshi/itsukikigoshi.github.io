"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import DialogAboutMe from "@/components/DialogAboutMe";
import { useState } from "react";

export default function Main() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const links = [
    {
      name: "GitHub",
      Icon: GitHubIcon,
      href: "https://www.github.com/itsukikigoshi",
    },
    {
      name: "Instagram",
      Icon: InstagramIcon,
      href: "https://www.instagram.com/itsukikigoshi",
    },
  ];

  const linkButtons = links.map((link) => (
    <IconButton
      key={link.name}
      href={link.href}
      target="_blank"
      color="primary"
      aria-label={link.name}
    >
      <link.Icon />
    </IconButton>
  ));

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        py: "2px",
      }}
    >
      <Stack
        justifyContent="center"
        sx={{
          display: "grid",
          placeItems: "center", // Center the content horizontally and vertically
        }}
        my={2}
        spacing={2}
      >
        <Avatar
          alt={`Itsuki Kigoshi's Profile Picture`}
          src={`/profile.jpg`}
          sx={{ width: 200, height: 200 }}
        />
        <Typography sx={{ fontSize: 28 }}>Itsuki Kigoshi</Typography>
        <Typography>{`ICU '27 (2004)`}</Typography>
      </Stack>
      <Stack spacing={1}>
        <Button
          startIcon={<TipsAndUpdatesIcon />}
          variant="outlined"
          onClick={handleClickOpen}
        >
          About Me
        </Button>
        <DialogAboutMe open={open} onClose={handleClose} />
        <Button
          startIcon={<LinkedInIcon />}
          variant="contained"
          href="https://www.linkedin.com/in/itsukikigoshi"
          target="_blank"
        >
          Open to Work!
        </Button>
        <Stack sx={{ justifyContent: "center" }} direction="row" spacing={2}>
          {linkButtons}
        </Stack>
      </Stack>
    </Box>
  );
}
