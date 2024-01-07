import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";

export default function Main() {
  const links = [
    {
      name: "Instagram",
      Icon: InstagramIcon,
      href: "https://www.instagram.com/itsukikigoshi",
    },
    {
      name: "X(formally Twitter)",
      Icon: TwitterIcon,
      href: "https://www.twitter.com/itsukikigoshi",
    },
    {
      name: "GitHub",
      Icon: GitHubIcon,
      href: "https://www.github.com/itsukikigoshi",
    },
    {
      name: "LinkedIn",
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com/in/itsukikigoshi",
    },
  ];

  const linkButtons = links.map(
    (
      link // This is a map function. It is used to create a list of elements.
    ) => (
      <IconButton
        key={link.name} // This is a unique key for each element. It is used to identify each element.
        href={link.href}
        target="_blank"
        color="primary"
        aria-label={link.name}
      >
        <link.Icon />
      </IconButton>
    )
  );
  return (
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
      <Stack direction="row" spacing={2} alignItems="flex-end">
        {linkButtons}
      </Stack>
    </Box>
  );
}
