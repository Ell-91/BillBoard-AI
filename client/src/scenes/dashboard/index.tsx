import { Box, useMediaQuery } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";

const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
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
        backgroundColor: "#111827", // bg-gray-900
        color: "#e5e7eb", // text-gray-200
        padding: "1rem",
        ...(isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }),
      }}
    >
      <DashboardBox bgcolor="#1f2937" gridArea="a">
        A
      </DashboardBox>
      <DashboardBox bgcolor="#374151" gridArea="b">
        B
      </DashboardBox>
      <DashboardBox bgcolor="#4b5563" gridArea="c">
        C
      </DashboardBox>
      <DashboardBox bgcolor="#6b7280" gridArea="d">
        D
      </DashboardBox>
      <DashboardBox bgcolor="#9ca3af" gridArea="e">
        E
      </DashboardBox>
      <DashboardBox bgcolor="#d1d5db" gridArea="f">
        F
      </DashboardBox>
      <DashboardBox bgcolor="#f3f4f6" gridArea="g">
        G
      </DashboardBox>
      <DashboardBox bgcolor="#e5e7eb" gridArea="h">
        H
      </DashboardBox>
      <DashboardBox bgcolor="#d1d5db" gridArea="i">
        I
      </DashboardBox>
      <DashboardBox bgcolor="#9ca3af" gridArea="j">
        J
      </DashboardBox>
    </Box>
  );
};

export default Dashboard;
