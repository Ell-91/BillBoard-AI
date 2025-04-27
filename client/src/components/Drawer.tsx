import { useState } from "react";
import {
  Box,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

type DrawerProps = {
  drawerWidth?: number;
};

const Drawer = ({ drawerWidth = 240 }: DrawerProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* Drawer toggle button - will be placed in the navbar */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer component */}
      <MuiDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, marginLeft: theme.spacing(2) }}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItem
            component="button"
            onClick={() => console.log("Dashboard settings clicked")}
          >
            <ListItemIcon>
              <SettingsIcon sx={{ color: theme.palette.grey[300] }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard Settings" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem component="button" onClick={() => console.log("Sign out clicked")}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: theme.palette.grey[300] }} />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </MuiDrawer>
    </Box>
  );
};

export default Drawer;
