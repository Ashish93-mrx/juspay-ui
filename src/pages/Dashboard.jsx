import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import StatCard from "../components/StatCard";
import MiniChart from "../components/MiniChart";
import TransactionsTable from "../components/TransactionsTable";
import { useTheme } from "@mui/material/styles";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Typography } from "@mui/material";
import { BarChart, Bar, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 15, projection: 20 },
  { name: "Mar", actual: 19, projection: 21 },
  { name: "Apr", actual: 22, projection: 25 },
  { name: "May", actual: 14, projection: 19 },
  { name: "Jun", actual: 20, projection: 23 },
];

const statData = [
  {
    title: "Customers",
    value: "3,781",
    delta: 11.01,
    bgLight: "#E3F5FF",
    bgDark: "#E3F5FF",
    textDarkMode: "#0F1724", // force black text on light bg
  },
  {
    title: "Orders",
    value: "1,219",
    delta: -0.03,
    bgLight: "#F7F9FB",
    bgDark: "#FFFFFF0D",
  },
  {
    title: "Revenue",
    value: "$695",
    delta: 15.03,
    bgLight: "#F7F9FB",
    bgDark: "#FFFFFF0D",
  },
  {
    title: "Growth",
    value: "30.1%",
    delta: 6.08,
    bgLight: "#E5ECF6",
    bgDark: "#E5ECF6",
    textDarkMode: "#0F1724",
  },
];

const chartData = Array.from({ length: 12 }).map((_, i) => ({
  name: `M${i + 1}`,
  value: Math.round(100 + Math.random() * 900),
}));

const transactions = [
  {
    id: "TX001",
    customer: "Rahul K",
    amount: 2599,
    status: "Success",
    date: "2025-09-16",
  },
  {
    id: "TX002",
    customer: "Anjali P",
    amount: 499,
    status: "Success",
    date: "2025-09-16",
  },
  {
    id: "TX003",
    customer: "Rohit S",
    amount: 199,
    status: "Failed",
    date: "2025-09-15",
  },
];

export default function Dashboard() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          width: 99,
          height: 28,
          position: "absolute",
          top: 96,
          left: 240,
          borderRadius: 1, // 8px
          px: 1, // 8px left/right
          py: 0.5, // 4px top/bottom
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            width: 83,
            height: 20,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
            opacity: 1,
            textAlign: "center",
          }}
        >
          eCommerce
        </Typography>
      </Box>
      <Box
        sx={{
          width: 892,
          height: 970,
          position: "absolute",
          top: 140,
          left: 240,
          gap: 28,
          opacity: 1,
        }}
      >
        <Grid container spacing={3}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <StatCard {...statData[0]} />
                </Grid>
                <Grid item xs={6}>
                  <StatCard {...statData[1]} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <StatCard {...statData[2]} />
                </Grid>
                <Grid item xs={6}>
                  <StatCard {...statData[3]} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              width: 432,
              height: 252,
              minWidth: 400,
              borderRadius: 2, // 16px
              p: 3, // 24px
              //   bgcolor: "#F7F9FB", / background
              bgcolor: theme.palette.mode === "light" ? "#F7F9FB" : "#FFFFFF0D",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                mb: 1,
                // color:"#000000"
                color: theme.palette.mode === "light" ? "#000000" : "#FFFFFF",
              }}
            >
              Projections vs Actuals
            </Typography>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E0E0E0"
                />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                {/* Projection first (lighter) */}
                <Bar
                  dataKey="projection"
                  fill="#A8C5DA"
                  barSize={32}
                  radius={[4, 4, 0, 0]} // round top corners
                />

                {/* Actual on top (darker) */}
                <Bar
                  dataKey="actual"
                  fill="#4C8BF5"
                  barSize={32}
                  radius={[4, 4, 0, 0]} // round top corners
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Box>
                  <strong>Revenue trend</strong>
                  <div style={{ fontSize: 12, color: "gray" }}>
                    Monthly aggregated
                  </div>
                </Box>
              </Box>

              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4C8BF5"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Paper>

            <TransactionsTable rows={transactions} />
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <strong>Live snapshot</strong>
              <MiniChart data={chartData.map((d) => ({ value: d.value }))} />
            </Paper>

            <Paper sx={{ p: 2 }}>
              <strong>Top merchants</strong>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                <li>Acme Payments — ₹1,20,000</li>
                <li>FastMart — ₹82,700</li>
                <li>ShopQuick — ₹78,200</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
