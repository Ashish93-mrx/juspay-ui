import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function TransactionsTable({ rows = [] }) {
  const theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{
        mt: 2,
        bgcolor: theme.palette.mode === "light" ? "#F7F9FB" : "#FFFFFF0D",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1">Top Selling Products</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.id} hover>
              <TableCell>{r.id}</TableCell>
              <TableCell>{r.customer}</TableCell>
              <TableCell>₹ {r.amount}</TableCell>
              <TableCell>{r.status}</TableCell>
              <TableCell>{r.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
