import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import FlexBetween from "../FlexBetween";
import GavelIcon from "@mui/icons-material/Gavel";

type NavbarProps = {
  drawerOpen: boolean;
  toggleDrawer: () => void;
};

const Navbar = ({ drawerOpen, toggleDrawer }: NavbarProps) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween p="0.5rem 0rem" pt="1rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{
            marginRight: 1,
            ...(drawerOpen && { display: "none" }),
          }}
        >
          <MenuIcon sx={{ fontSize: "28px" }} />
        </IconButton>
        <GavelIcon sx={{ fontSize: "25px", paddingRight: "4px" }} />
        <Typography variant="h4" fontSize="25px">
          BillBoardAI
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <Box pr="2rem" />
      {!drawerOpen && (
        <FlexBetween gap="2rem">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Typography
              component={RouterLink}
              to="/"
              onClick={() => setSelected("dashboard")}
              sx={{
                color:
                  selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Typography
              component={RouterLink}
              to="/predictions"
              onClick={() => setSelected("predictions")}
              sx={{
                color:
                  selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Predictions
            </Typography>
          </Box>
        </FlexBetween>
      )}
    </FlexBetween>
  );
};

export default Navbar;
