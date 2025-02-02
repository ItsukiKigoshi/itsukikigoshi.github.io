import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TheatersIcon from "@mui/icons-material/Theaters";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function Main() {
  const links = [
    {
      name: "Instagram",
      Icon: InstagramIcon,
      href: "https://www.instagram.com/itsukikigoshi",
    },
    {
      name: "GitHub",
      Icon: GitHubIcon,
      href: "https://www.github.com/itsukikigoshi",
    },
    {
      name: "Booklog",
      Icon: AutoStoriesIcon,
      href: "https://booklog.jp/users/itsukikigoshi",
    },
    {
      name: "IMDb",
      Icon: TheatersIcon,
      href: "https://www.imdb.com/user/ur163313033/",
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
          startIcon={<LinkedInIcon />}
          variant="outlined"
          href="https://www.linkedin.com/in/itsukikigoshi"
          target="_blank"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          href="https://www.wantedly.com/id/itsukikigoshi"
          target="_blank"
        >
          Wantedly
        </Button>
        <Stack sx={{ justifyContent: "center" }} direction="row" spacing={2}>
          {linkButtons}
        </Stack>
      </Stack>
    </Box>
  );
}
