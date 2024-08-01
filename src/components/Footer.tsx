import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CottageIcon from "@mui/icons-material/Cottage";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Button, ButtonGroup, Paper, Stack } from "@mui/material";

export default function Footer() {
  type Items = {
    title: string;
    url: string;
    inNewTab: boolean;
    icon: React.ReactNode;
  };

  const mapButtons = (items: Items[]): React.ReactNode => {
    return items.map((item) => (
      <Button
        key={item.title}
        href={item.url}
        target={item.inNewTab ? "_blank" : "_self"}
        startIcon={item.icon}
        variant={
          typeof window !== "undefined" && window.location.pathname === item.url
            ? "contained"
            : "outlined"
        }
      >
        {item.title}
      </Button>
    ));
  };

  const row_1 = mapButtons([
    {
      title: "Home",
      url: "/",
      inNewTab: false,
      icon: <CottageIcon />,
    },
    {
      title: "Curation",
      url: "/curation",
      inNewTab: false,
      icon: <TipsAndUpdatesIcon />,
    },
    {
      title: "Reading",
      url: "/reading",
      inNewTab: false,
      icon: <AutoStoriesIcon />,
    },
  ]);

  const row_2 = mapButtons([
    {
      title: "特定商取引法に基づく表記",
      url: "/salespolicy",
      inNewTab: false,
      icon: <InfoIcon />,
    },
    {
      title: "Source",
      url: "https://github.com/ItsukiKigoshi/itsukikigoshi.github.io",
      inNewTab: true,
      icon: <GitHubIcon />,
    },
  ]);

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
