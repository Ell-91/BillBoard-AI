import DashboardBox from "@/components/DashboardBox";
import { Typography } from "@mui/material";

type Props = {};

const Row1 = (props: Props) => {
  return (
    <>
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
    </>
  );
};
export default Row1;
