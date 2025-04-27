import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: theme.spacing(2),  // <-- Add left padding
  paddingRight: theme.spacing(2), // <-- Add right padding
}));

export default FlexBetween;