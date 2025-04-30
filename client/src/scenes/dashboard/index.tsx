import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLargeScreens = `
  "a b c"
  "d e e"
  "f g g"
`;

const gridTemplateSmallScreens = `
  "a"
  "b"
  "c"
  "d"
  "e"
  "f"
  "g"
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="grid"
      gap="1.5rem"
      sx={{
        backgroundColor: "#111827",
        color: "#e5e7eb",
        padding: "1rem",
        ...(isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
              gridTemplateRows: "minmax(120px, auto) 1.5fr 1fr",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "minmax(100px, auto)",
              gridTemplateAreas: gridTemplateSmallScreens,
            }),
      }}
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
