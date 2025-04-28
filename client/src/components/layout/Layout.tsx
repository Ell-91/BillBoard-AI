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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Conditionally render Navbar */}
      {!drawerOpen && (
        <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      )}

      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        {/* Sidebar Drawer */}
        <Drawer
          drawerWidth={drawerWidth}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "1rem",
            marginLeft: drawerOpen ? `${drawerWidth}px` : 0,
            transition: theme.transitions.create(["margin", "width"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: drawerOpen ? `calc(100vw - ${drawerWidth}px)` : "100vw",
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
