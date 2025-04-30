import DashboardBox from "@/components/DashboardBox";
import { Typography } from "@mui/material";

const Row2 = () => {
  return (
    <>
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
    </>
  );
};
export default Row2;
