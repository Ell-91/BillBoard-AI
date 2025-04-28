import React from "react";
// import { Box, Typography, Grid, useTheme } from "@mui/material";
import { Box, Typography, Grid } from "@mui/material";

// Data for categories
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

const categoryDetails = {
  Healthcare: "Access to healthcare services and policy",
  Education: "Funding, standards, and equity",
  Environment: "Climate change and conservation",
  "Social Justice": "Racial equity and civil rights",
  "Economic Policy": "Taxation and economic reforms",
  Technology: "AI and cybersecurity",
  "Public Safety": "Crime prevention reforms",
  Infrastructure: "Transit and urban planning",
};

// Badge component
const Badge = ({ children, backgroundColor }) => (
  <Box
    component="span"
    sx={{
      display: "inline-flex",
      alignItems: "center",
      padding: "0 0.5rem",
      height: "1.25rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: "500",
      backgroundColor: backgroundColor || "#4b5563", // bg-gray-600
      color: "#111827", // text-gray-900
      marginLeft: "0.25rem",
      flexShrink: 0,
    }}
  >
    {children}
  </Box>
);

const Row3 = () => {
  return (
    <>
      {/* Legislative Categories - Grid Areas g, h, i, j */}
      <Box
        gridArea="g"
        height="100%"
        sx={{
          backgroundColor: "#1f2937", // bg-gray-800
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #374151", // border-gray-700
          overflow: "hidden",
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
            Legislative Categories (Part 1)
          </Typography>
        </Box>

        <Box sx={{ padding: "0.5rem", flexGrow: 1 }}>
          <Grid container spacing={1}>
            {categories.slice(0, 2).map((category) => (
              <Grid item xs={12} key={category.name}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                    backgroundColor: "#374151", // bg-gray-700
                    borderRadius: "0.375rem",
                    border: "1px solid #4b5563", // border-gray-600
                  }}
                >
                  <Box
                    sx={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "9999px",
                      marginRight: "0.5rem",
                      backgroundColor: category.color,
                    }}
                  />
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "500", color: "#e5e7eb" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#9ca3af",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {categoryDetails[category.name]}
                    </Typography>
                  </Box>
                  <Badge backgroundColor={category.color}>
                    {category.count}
                  </Badge>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        gridArea="h"
        height="100%"
        sx={{
          backgroundColor: "#1f2937", // bg-gray-800
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #374151", // border-gray-700
          overflow: "hidden",
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
            Legislative Categories (Part 2)
          </Typography>
        </Box>

        <Box sx={{ padding: "0.5rem", flexGrow: 1 }}>
          <Grid container spacing={1}>
            {categories.slice(2, 4).map((category) => (
              <Grid item xs={12} key={category.name}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                    backgroundColor: "#374151", // bg-gray-700
                    borderRadius: "0.375rem",
                    border: "1px solid #4b5563", // border-gray-600
                  }}
                >
                  <Box
                    sx={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "9999px",
                      marginRight: "0.5rem",
                      backgroundColor: category.color,
                    }}
                  />
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "500", color: "#e5e7eb" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#9ca3af",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {categoryDetails[category.name]}
                    </Typography>
                  </Box>
                  <Badge backgroundColor={category.color}>
                    {category.count}
                  </Badge>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        gridArea="i"
        height="100%"
        sx={{
          backgroundColor: "#1f2937", // bg-gray-800
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #374151", // border-gray-700
          overflow: "hidden",
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
            Legislative Categories (Part 3)
          </Typography>
        </Box>

        <Box sx={{ padding: "0.5rem", flexGrow: 1 }}>
          <Grid container spacing={1}>
            {categories.slice(4, 6).map((category) => (
              <Grid item xs={12} key={category.name}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                    backgroundColor: "#374151", // bg-gray-700
                    borderRadius: "0.375rem",
                    border: "1px solid #4b5563", // border-gray-600
                  }}
                >
                  <Box
                    sx={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "9999px",
                      marginRight: "0.5rem",
                      backgroundColor: category.color,
                    }}
                  />
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "500", color: "#e5e7eb" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#9ca3af",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {categoryDetails[category.name]}
                    </Typography>
                  </Box>
                  <Badge backgroundColor={category.color}>
                    {category.count}
                  </Badge>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        gridArea="j"
        height="100%"
        sx={{
          backgroundColor: "#1f2937", // bg-gray-800
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #374151", // border-gray-700
          overflow: "hidden",
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
            Legislative Categories (Part 4)
          </Typography>
        </Box>

        <Box sx={{ padding: "0.5rem", flexGrow: 1 }}>
          <Grid container spacing={1}>
            {categories.slice(6, 8).map((category) => (
              <Grid item xs={12} key={category.name}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.5rem",
                    backgroundColor: "#374151", // bg-gray-700
                    borderRadius: "0.375rem",
                    border: "1px solid #4b5563", // border-gray-600
                  }}
                >
                  <Box
                    sx={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "9999px",
                      marginRight: "0.5rem",
                      backgroundColor: category.color,
                    }}
                  />
                  <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "500", color: "#e5e7eb" }}
                    >
                      {category.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#9ca3af",
                        display: "block",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {categoryDetails[category.name]}
                    </Typography>
                  </Box>
                  <Badge backgroundColor={category.color}>
                    {category.count}
                  </Badge>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Row3;
