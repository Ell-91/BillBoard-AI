// src/components/layout/Layout.tsx
import { useState, ReactNode } from "react";
import { Box, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const drawerWidth = 240;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Drawer 
          drawerWidth={drawerWidth} 
          open={drawerOpen} 
          onClose={() => setDrawerOpen(false)}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            padding: "1rem 2rem 4rem 2rem",
            marginLeft: drawerOpen ? `${drawerWidth}px` : 0,
            transition: theme.transitions.create(['margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;