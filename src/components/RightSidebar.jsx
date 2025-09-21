import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function RightSidebar() {
  const theme = useTheme();

  const notifications = [
    { text: "You have a bug that needs fixing", time: "Just now" },
    { text: "New user registered", time: "59 minutes ago" },
    { text: "You have a bug that needs fixing", time: "12 hours ago" },
    { text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

  const activities = [
    {
      text: "You have a bug that needs fixing",
      time: "Just now",
      avatar: "https://i.pravatar.cc/40?img=15",
    },
    {
      text: "Released a new version",
      time: "59 minutes ago",
      avatar: "https://i.pravatar.cc/40?img=16",
    },
    {
      text: "Submitted a bug",
      time: "12 hours ago",
      avatar: "https://i.pravatar.cc/40?img=17",
    },
    {
      text: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      avatar: "https://i.pravatar.cc/40?img=18",
    },
    {
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      avatar: "https://i.pravatar.cc/40?img=19",
    },
  ];

  const contacts = [
    { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=6" },
    { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=7" },
    { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/40?img=8" },
    { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=9" },
    { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=10" },
    { name: "Koray Okumus", avatar: "https://i.pravatar.cc/40?img=11" },
  ];

return (
  <Box
    sx={{
      width: 280,
      height: "100vh",                // full height of viewport
      borderLeft: `1px solid ${theme.palette.divider}`,
      bgcolor: "background.paper",
      p: 2,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      overflowY: "auto",              // enable vertical scroll
      "&::-webkit-scrollbar": {       // optional: hide scrollbar for clean look
        width: "6px"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.divider,
        borderRadius: "4px"
      }
    }}
  >
    {/* Notifications */}
    <Box>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          mb: 1,
          height: 36,
          color: "text.primary"
        }}
      >
        Notifications
      </Typography>
      <List disablePadding>
        {notifications.map((n, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 46,
              gap: 1
            }}
          >
            <Avatar
              sx={{
                width: 24,
                height: 24,
                fontSize: 14,
                bgcolor: theme.palette.primary.main
              }}
            >
              {n.text.charAt(0)}
            </Avatar>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {n.text}
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "text.secondary",
                  lineHeight: "16px"
                }}
              >
                {n.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </List>
    </Box>

    {/* Activities */}
    <Box>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          mb: 1,
          color: "text.primary"
        }}
      >
        Activities
      </Typography>
      <List disablePadding>
        {activities.map((a, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 46,
              gap: 1
            }}
          >
            <Avatar src={a.avatar} sx={{ width: 24, height: 24 }} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "text.primary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {a.text}
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  color: "text.secondary",
                  lineHeight: "16px"
                }}
              >
                {a.time}
              </Typography>
            </Box>
          </Box>
        ))}
      </List>
    </Box>

    {/* Contacts */}
    <Box>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "20px",
          mb: 1,
          color: "text.primary"
        }}
      >
        Contacts
      </Typography>
      <List disablePadding>
        {contacts.map((c, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              height: 40
            }}
          >
            <Avatar src={c.avatar} sx={{ width: 28, height: 28 }} />
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "text.primary",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {c.name}
            </Typography>
          </Box>
        ))}
      </List>
    </Box>
  </Box>
);
}