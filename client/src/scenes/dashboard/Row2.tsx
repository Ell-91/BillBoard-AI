import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

// Data for the dashboard
const categories = [
  { name: "Healthcare", count: 245, color: "#60a5fa", percentage: 24 },
  { name: "Education", count: 189, color: "#5eead4", percentage: 19 },
  { name: "Environment", count: 156, color: "#fcd34d", percentage: 16 },
  { name: "Social Justice", count: 134, color: "#f87171", percentage: 13 },
  { name: "Economic Policy", count: 123, color: "#a78bfa", percentage: 12 },
  { name: "Technology", count: 98, color: "#6ee7b7", percentage: 10 },
  { name: "Public Safety", count: 67, color: "#fbbf24", percentage: 6 },
  { name: "Infrastructure", count: 45, color: "#d8b4fe", percentage: 5 },
];

const monthlyData = [
  { month: "Jan", introduced: 45, passed: 12 },
  { month: "Feb", introduced: 38, passed: 15 },
  { month: "Mar", introduced: 52, passed: 18 },
  { month: "Apr", introduced: 41, passed: 14 },
  { month: "May", introduced: 47, passed: 16 },
  { month: "Jun", introduced: 43, passed: 13 },
];

// Custom pie chart label
const renderCustomizedPieLabel = (entry) => {
  return `${entry.name.substring(0, 5)}.. (${entry.percentage}%)`;
};

// KPI Card Component
const DashboardCard = ({ title, value, change, isPositive }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f2937", // bg-gray-800
        borderRadius: "0.5rem",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #374151", // border-gray-700
        padding: "0.75rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#9ca3af", marginBottom: "0.25rem" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#f3f4f6" }}>
        {value}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.75rem",
          color: "#9ca3af",
        }}
      >
        <ArrowUpRight
          style={{
            height: "0.75rem",
            width: "0.75rem",
            marginRight: "0.25rem",
            color: isPositive ? "#34d399" : "#f87171", // text-green-400 or text-red-400
            transform: isPositive ? "none" : "rotate(180deg)",
          }}
        />
        {change}
      </Box>
    </Box>
  );
};

// Chart Card Component
const ChartCard = ({ title, children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f2937", // bg-gray-800
        borderRadius: "0.5rem",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #374151", // border-gray-700
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: "0.5rem 0.75rem",
          borderBottom: "1px solid #374151", // border-gray-700
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontWeight: "500", color: "#e5e7eb" }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ padding: "0.75rem", flexGrow: 1 }}>{children}</Box>
    </Box>
  );
};

const Row1 = () => {
  return (
    <>
      {/* Total Active Bills - Grid Area "a" */}
      <Box gridArea="a" height="100%">
        <DashboardCard
          title="Total Active Bills"
          value="1,012"
          change="+8% from last month"
          isPositive={true}
        />
      </Box>

      {/* Bills Passed This Month - Grid Area "b" */}
      <Box gridArea="b" height="100%">
        <DashboardCard
          title="Bills Passed This Month"
          value="43"
          change="-5% from last month"
          isPositive={false}
        />
      </Box>

      {/* Bills in Committee - Grid Area "c" */}
      <Box gridArea="c" height="100%">
        <DashboardCard
          title="Bills in Committee"
          value="289"
          change="+12% from last month"
          isPositive={true}
        />
      </Box>

      {/* Distribution by Category Chart - Grid Area "d" */}
      <Box gridArea="d" height="100%">
        <ChartCard title="Distribution by Category">
          <Box height="200px">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  dataKey="percentage"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  innerRadius={25}
                  paddingAngle={2}
                  label={renderCustomizedPieLabel}
                  labelLine={{ stroke: "#4b5563", strokeWidth: 1 }}
                >
                  {categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    color: "#e5e7eb",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </ChartCard>
      </Box>

      {/* Monthly Bill Activity Chart - Grid Area "e" */}
      <Box gridArea="e" height="100%">
        <ChartCard title="Monthly Bill Activity">
          <Box height="200px">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} barSize={16}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
                <YAxis stroke="#9ca3af" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    color: "#e5e7eb",
                  }}
                />
                <Bar
                  dataKey="introduced"
                  fill="#60a5fa"
                  name="Introduced"
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="passed"
                  fill="#5eead4"
                  name="Passed"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </ChartCard>
      </Box>
    </>
  );
};

export default Row1;
