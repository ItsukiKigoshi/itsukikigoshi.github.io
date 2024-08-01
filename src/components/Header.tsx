import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Avatar,
  Button,
  Typography,
  Toolbar,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Stack,
} from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;
const navItems = ["Home", "Curation", "Contact"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        my={2}
      >
        <Avatar
          alt={`Itsuki Kigoshi's Profile Picture`}
          src={`/profile.jpg`}
          sx={{ width: 50, height: 50 }}
        />
        <Typography variant="h6" sx={{ my: 2 }}>
          Itsuki Kigoshi
        </Typography>
      </Stack>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={`/${item}`}>
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
