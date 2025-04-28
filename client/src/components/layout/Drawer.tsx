import {
  Drawer as MuiDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import CloseIcon from "@mui/icons-material/Close";
// import BallotIcon from "@mui/icons-material/Ballot";
import GavelIcon from "@mui/icons-material/Gavel";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

type DrawerProps = {
  drawerWidth: number;
  open: boolean;
  onClose: () => void;
};

const Drawer = ({ drawerWidth, open, onClose }: DrawerProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <MuiDrawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        // This is the key - disable the backdrop overlay
        hideBackdrop: true,
        // Make sure click events pass through to the content behind
        disableEnforceFocus: true,
        disableAutoFocus: true,
        disableRestoreFocus: true,
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
          // Remove shadow
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1),
        }}
      >
        <GavelIcon sx={{ fontSize: "25px", color: theme.palette.grey[700] }} />
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          BillBoard AI
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon sx={{ fontSize: "25px" }} />
        </IconButton>
      </Box>

      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ fontSize: "18px" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/predictions");
              onClose();
            }}
          >
            <ListItemIcon>
              <TrendingUpOutlinedIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Predictions"
              primaryTypographyProps={{ fontSize: "18px" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/settings");
              onClose();
            }}
          >
            <ListItemIcon>
              <SettingsIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              primaryTypographyProps={{ fontSize: "18px" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/signout");
              onClose();
            }}
          >
            <ListItemIcon>
              <LogoutIcon sx={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText
              primary="Sign Out "
              primaryTypographyProps={{ fontSize: "18px" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
