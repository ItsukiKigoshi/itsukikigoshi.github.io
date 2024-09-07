import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import CottageIcon from "@mui/icons-material/Cottage";
import { Button, ButtonGroup, Link, Paper, Stack } from "@mui/material";

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
      >
        {item.title}
      </Button>
    ));
  };

  const button_group = mapButtons([
    {
      title: "Home",
      url: "/",
      inNewTab: false,
      icon: <CottageIcon />,
    },
    {
      title: "特定商取引法に基づく表記",
      url: "/salespolicy",
      inNewTab: false,
      icon: <InfoIcon />,
    },
  ]);

  return (
    <Paper
      sx={{
        backgroundColor: "transparent",
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        p: 2,
      }}
      elevation={0}
    >
      <Stack spacing={1} alignItems="center">
        {<ButtonGroup>{button_group}</ButtonGroup>}
        <Link
          href="https://github.com/ItsukiKigoshi/itsukikigoshi.github.io"
          target="_blank"
        >
          Source of This Site
        </Link>
      </Stack>
    </Paper>
  );
}
