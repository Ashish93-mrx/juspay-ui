import React from "react";
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

export default function TransactionsTable({ rows = [] }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1">Recent transactions</Typography>
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
