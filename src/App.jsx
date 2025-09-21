import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import { ThemeProviderWrapper } from "./theme/ThemeProvider";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            bgcolor: "background.default",
          }}
        >
          <Sidebar />
          <Box component="main" sx={{ flex: 1, display: "flex" }}>
            <Box sx={{ flex: 1 }}>
              <Topbar />
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/orders" element={<OrderList />} />
              </Routes>
            </Box>
            {location.pathname === "/dashboard" && <RightSidebar />}
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
}
