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
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";
import { Typography } from "@mui/material";

const data = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 15, projection: 20 },
  { name: "Mar", actual: 19, projection: 21 },
  { name: "Apr", actual: 22, projection: 25 },
  { name: "May", actual: 14, projection: 19 },
  { name: "Jun", actual: 20, projection: 23 },
];

const statData = [
  { title: "Customers", value: "3,781", delta: 11.01, bgLight: "#E3F5FF", bgDark: "#E3F5FF", textDarkMode: "#0F1724" },
  { title: "Orders", value: "1,219", delta: -0.03, bgLight: "#F7F9FB", bgDark: "#FFFFFF0D" },
  { title: "Revenue", value: "$695", delta: 15.03, bgLight: "#F7F9FB", bgDark: "#FFFFFF0D" },
  { title: "Growth", value: "30.1%", delta: 6.08, bgLight: "#E5ECF6", bgDark: "#E5ECF6", textDarkMode: "#0F1724" },
];

const chartData = Array.from({ length: 12 }).map((_, i) => ({
  name: `M${i + 1}`,
  value: Math.round(100 + Math.random() * 900),
}));

const transactions = [
  { id: "TX001", customer: "Rahul K", amount: 2599, status: "Success", date: "2025-09-16" },
  { id: "TX002", customer: "Anjali P", amount: 499, status: "Success", date: "2025-09-16" },
  { id: "TX003", customer: "Rohit S", amount: 199, status: "Failed", date: "2025-09-15" },
];

export default function Dashboard() {
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* Title */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          eCommerce
        </Typography>
      </Box>

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

        <Grid item xs={12} md={6} lg={6}>
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

                <Bar
                  dataKey="projection"
                  fill="#A8C5DA"
                  barSize={32}
                  radius={[4, 4, 0, 0]} 
                />

                <Bar
                  dataKey="actual"
                  fill="#4C8BF5"
                  barSize={32}
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  Revenue trend
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Monthly aggregated
                </Typography>
              </Box>
            </Box>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4C8BF5" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          <TransactionsTable rows={transactions} />
        </Grid>

        {/* Snapshot + Top Merchants */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Typography variant="subtitle2" fontWeight={600}>
              Live snapshot
            </Typography>
            <MiniChart data={chartData.map((d) => ({ value: d.value }))} />
          </Paper>

          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle2" fontWeight={600}>
              Top merchants
            </Typography>
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              <li>Acme Payments — ₹1,20,000</li>
              <li>FastMart — ₹82,700</li>
              <li>ShopQuick — ₹78,200</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}