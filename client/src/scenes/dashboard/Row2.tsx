import DashboardBox from "@/components/DashboardBox";
import { Box, Typography } from "@mui/material";

type Props = {};

const Row2 = (props: Props) => {
  return (
    <>
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
    </>
  );
};
export default Row2;
