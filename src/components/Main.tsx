import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

export default function Main() {
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
        spacing={1}
        sx={{
          display: "grid",
          placeItems: "center", // Center the content horizontally and vertically
        }}
        my={2}
      >
        <Avatar
          alt={`Itsuki Kigoshi's Profile Picture`}
          src={`/profile.jpg`}
          sx={{ width: 200, height: 200 }}
        />
        <Typography sx={{ fontSize: 28 }}>Itsuki KIGOSHI</Typography>
        <Typography>{`ICU '27 (2004)`}</Typography>
      </Stack>
      <Stack spacing={1}>
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
      {/* <Stack>
        <Card>
          <CardContent>
            <h2>
              Hi there 👋 I'm NOT an engineer but wanna be a creator/artist.
            </h2>
            <h3>🔭I’m currently thinking of creating...</h3>
            <ul>
              <li>
                <a href="https://github.com/ItsukiKigoshi/open-desk-view">
                  open-desk-view
                </a>
                : Open-sourced webcam tool for easily showing docs on ur table
                in online meetings like{" "}
                <a href="https://support.apple.com/en-gb/guide/mac-help/mchl06927be8/mac">
                  Apple's 'Desk View'
                </a>
                .
              </li>
              <li>
                <a href="https://github.com/ItsukiKigoshi/icu-catalogue">
                  ICU Catalogue
                </a>
                : Powerful syllabi search engine and academic planning tool for
                ICU students.
              </li>
              <li>
                <a href="https://github.com/ItsukiKigoshi/shinonome-bunko">
                  Shinonome Bunko
                </a>
                : Automated git-based OCR&peer-review platform for publishing
                public domain Japanese literature as e-books.
              </li>
              <li>
                <a href="https://github.com/ItsukiKigoshi/curhythm">Curhythm</a>
                : Rubik's Cube-alike musical instrument to generate beat,
                melody, harmony & video.
              </li>
              <li>
                OpenPoliCash: Git-based open-source 政治資金収支報告書 database
                with an Open Data
              </li>
            </ul>
            <h3>🎈My dream is...</h3>
            <ul>
              <li>
                Collaborating with <a href="https://zutomayo.net">Zutomayo</a>{" "}
                as an artist🦔.
              </li>
              <li>Holding a museum exhibition as a contemporary artist🎨.</li>
            </ul>
            <h3>📫 How to reach me:</h3>
            <p>itsukikigoshi+github[at]gmail.com</p>
          </CardContent>
        </Card>
      </Stack> */}
    </Box>
  );
}
