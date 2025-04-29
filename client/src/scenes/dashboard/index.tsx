import { Box, Typography, useMediaQuery } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";

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
      {/* First Row (Smaller boxes) */}
      <DashboardBox bgcolor="#1f2937" gridArea="a">
        <Typography variant="h6">Total Active Bills</Typography>
        <Typography variant="h4">1,012</Typography>
        <Typography color="lightgreen">+8% from last month</Typography>
      </DashboardBox>
      <DashboardBox bgcolor="#374151" gridArea="b">
        <Typography variant="h6">Bills Passed This Month</Typography>
        <Typography variant="h4">43</Typography>
        <Typography color="tomato">-5% from last month</Typography>
      </DashboardBox>
      <DashboardBox bgcolor="#4b5563" gridArea="c">
        <Typography variant="h6">Bills in Committee</Typography>
        <Typography variant="h4">289</Typography>
        <Typography color="lightgreen">+12% from last month</Typography>
      </DashboardBox>

      {/* Second Row (Larger boxes) */}
      <DashboardBox bgcolor="#6b7280" gridArea="d">
        <Typography variant="h6">Distribution by Category</Typography>
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Insert the pie chart component here */}
          <Typography>Pie Chart Placeholder</Typography>
        </Box>
      </DashboardBox>
      <DashboardBox bgcolor="#9ca3af" gridArea="e">
        <Typography variant="h6">Monthly Bill Activity</Typography>
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Insert the bar graph component here */}
          <Typography>Bar Graph Placeholder</Typography>
        </Box>
      </DashboardBox>

      {/* Third Row (Larger boxes) */}
      <DashboardBox bgcolor="#d1d5db" gridArea="f">
        <Typography variant="h6">Recent Bills</Typography>
        <Typography>HR-2354 – In Committee</Typography>
        <Typography>Healthcare Access Improvement Act</Typography>
        <Typography>Healthcare</Typography>
      </DashboardBox>
      <DashboardBox bgcolor="#f3f4f6" gridArea="g">
        <Typography variant="h6">Legislative Categories</Typography>
        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
          <li>Healthcare</li>
          <li>Education</li>
          <li>Energy</li>
          <li>Transportation</li>
          <li>Defense</li>
        </ul>
      </DashboardBox>
    </Box>
  );
};

export default Dashboard;
