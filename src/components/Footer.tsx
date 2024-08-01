import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CottageIcon from "@mui/icons-material/Cottage";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Button, ButtonGroup, Paper, Stack } from "@mui/material";

export default function Footer() {
  const row_1 = [
    {
      title: "Home",
      url: "/",
      inNewTab: false,
      icon: <CottageIcon />,
    },
    {
      title: "Curation",
      url: "/curation",
      isNewTab: false,
      icon: <TipsAndUpdatesIcon />,
    },
    {
      title: "Reading",
      url: "/reading",
      isNewTab: false,
      icon: <AutoStoriesIcon />,
    },
  ].map((item) => (
    <Button
      key={item.title}
      href={item.url}
      target={item.isNewTab ? "_blank" : "_self"}
      startIcon={item.icon}
    >
      {item.title}
    </Button>
  ));

  const row_2 = [
    {
      title: "特定商取引法に基づく表記",
      url: "/salespolicy",
      isNewTab: false,
      icon: <InfoIcon />,
    },
    {
      title: "Source",
      url: "https://github.com/ItsukiKigoshi/itsukikigoshi.github.io",
      isNewTab: true,
      icon: <GitHubIcon />,
    },
  ].map((item) => (
    <Button
      key={item.title}
      href={item.url}
      target={item.isNewTab ? "_blank" : "_self"}
      startIcon={item.icon}
    >
      {item.title}
    </Button>
  ));

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
      }}
      elevation={0}
    >
      <Stack spacing={1} alignItems="center">
        {<ButtonGroup>{row_1}</ButtonGroup>}
        {<ButtonGroup>{row_2}</ButtonGroup>}
      </Stack>
    </Paper>
  );
}
