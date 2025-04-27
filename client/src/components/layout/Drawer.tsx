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
import BallotIcon from "@mui/icons-material/Ballot";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

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
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(2),
        }}
      >
        <BallotIcon sx={{ fontSize: "25px" }} />
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
          <CloseIcon />
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
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
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
              <TrendingUpOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Predictions" />
          </ListItemButton>
        </ListItem>
      </List>
    </MuiDrawer>
  );
};

export default Drawer;

// Drawer color alternative sx={{ color: theme.palette.text.primary }}
