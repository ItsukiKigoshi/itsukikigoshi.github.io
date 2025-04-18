import InfoIcon from "@mui/icons-material/Info";
import CottageIcon from "@mui/icons-material/Cottage";
import { Button, ButtonGroup, Link, Paper, Stack } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const button_group = [
    {
      title: "Home",
      pathname: "/",
      inNewTab: false,
      icon: <CottageIcon />,
    },
    {
      title: "特定商取引法に基づく表記",
      pathname: "/salespolicy",
      inNewTab: false,
      icon: <InfoIcon />,
    },
  ];

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
        <ButtonGroup>
          {button_group
            .filter((button_item) => button_item.pathname !== pathname)
            .map((button_item) => (
              <Button
                key={button_item.title}
                href={button_item.pathname}
                target={button_item.inNewTab ? "_blank" : "_self"}
                startIcon={button_item.icon}
              >
                {button_item.title}
              </Button>
            ))}
        </ButtonGroup>
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
