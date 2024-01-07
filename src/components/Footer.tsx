import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import SendIcon from "@mui/icons-material/Send";
import { Button, ButtonGroup, Stack } from "@mui/material";

export default function Footer() {
  const row_1 = [
    {
      title: "Hire Me",
      url: "http://www.ansin-teacher.net/data/teacher59096.html",
      icon: <SendIcon />,
    },
    {
      title: "Source",
      url: "https://github.com/ItsukiKigoshi/itsukikigoshi.github.io",
      icon: <GitHubIcon />,
    },
  ].map((item) => (
    <Button
      key={item.title}
      href={item.url}
      target="_blank"
      startIcon={item.icon}
    >
      {item.title}
    </Button>
  ));

  const row_2 = [
    {
      title: "特定商取引法に基づく表記",
      url: "/salespolicy",
      icon: <InfoIcon />,
    },
  ].map((item) => (
    <Button
      variant="outlined"
      key={item.title}
      href={item.url}
      startIcon={item.icon}
    >
      {item.title}
    </Button>
  ));

  return (
    <Stack useFlexGap spacing={1}>
      {<ButtonGroup aria-label="button group">{row_1}</ButtonGroup>}
      {row_2}
    </Stack>
  );
}
