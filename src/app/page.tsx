import * as React from "react";
import IconButton from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center", // Center the content horizontally and vertically
        minHeight: "80vh", // Set a minimum height to fill the entire viewport
      }}
    >
      <Box
        sx={{
          display: "grid",
          placeItems: "center", // Center the content horizontally and vertically
        }}
      >
        <Avatar
          alt={`Itsuki Kigoshi's Profile Picture`}
          src={`/profile.jpg`}
          sx={{ width: 200, height: 200 }}
        />
        <Typography sx={{ fontSize: 28, mt: 2 }}>Itsuki KIGOSHI</Typography>
        <Typography sx={{ m: 2 }}>{`ICU '27 (2004)`}</Typography>
        <Stack direction="row" spacing={1} alignItems="flex-end">
          {/* Those icons are repeatedly used in a similar form. Consider using a component insted.*/}
          <IconButton
            href="https://www.instagram.com/itsukikigoshi"
            target="_blank"
            color="primary"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href="https://www.twitter.com/itsukikigoshi"
            target="_blank"
            color="primary"
            aria-label="X(formally Twitter)"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://www.github.com/itsukikigoshi"
            target="_blank"
            color="primary"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/itsukikigoshi"
            target="_blank"
            color="primary"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>

      {/*Button for job offer*/}
      {/*
      <Button
        variant="outlined"
        href="http://www.ansin-teacher.net/data/teacher59096.html"
        target="_blank"
      >
        Hire Me
      </Button>
      */}
    </Box>
  );
}
