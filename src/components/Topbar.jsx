import { Box, Typography, InputBase, IconButton } from "@mui/material";
import { useThemeProvider } from "../theme/ThemeProvider";
import { useTheme } from "@mui/material/styles";

import {
  Sidebar,
  Star,
  Sun,
  ClockCounterClockwise,
  Bell,
  Monitor,
} from "phosphor-react";

export default function Topbar() {
  const { toggle } = useThemeProvider();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 68,
        position: "relative",
        // left: 212,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderColor: theme.palette.divider,
        px: "28px", // padding-left/right = 28
        py: "20px", // padding-top/bottom = 20
        bgcolor: "background.paper",
        opacity: 1,
      }}
    >
      {/* Left: Breadcrumb */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          width: 256,
          height: 28,
        }}
      >
        <Sidebar size={20} weight="regular" />
        <Star size={20} weight="regular" />

        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
            color: "text.secondary",
          }}
        >
          Dashboards
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: 0,
            color: "text.primary",
          }}
        >
          / Default
        </Typography>
      </Box>

      {/* Right: Search + icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 316,
          height: 28,
          gap: 2,
        }}
      >
        {/* Search box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 160,
            height: 28,
            px: 1, // 8px left/right
            py: 0.5, // 4px top/bottom
            gap: 1.2, // 8px
            borderRadius: 1, // 8px
            opacity: 1,
            bgcolor: theme.palette.mode === "light" ? "#F5F5F5" : "#2C2C2C",
          }}
        >
          <InputBase
            placeholder="Search"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              color: "text.secondary",
              "& input::placeholder": {
                color: "text.secondary",
                opacity: 1,
              },
            }}
          />
          <Typography
            sx={{
              fontSize: "12px",
              color: "text.disabled",
              ml: 1,
            }}
          >
            ⌘/
          </Typography>
        </Box>

        {/* Action icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 136,
            height: 28,
            gap: 1, // 8px
            borderRadius: 1,
          }}
        >
          <IconButton onClick={toggle}>
            {theme.palette.mode === "dark" ? (
              <Sun size={20} weight="regular" />
            ) : (
              <Sun size={20} weight="regular" />
            )}
          </IconButton>

          <IconButton>
            <ClockCounterClockwise size={20} weight="regular" />
          </IconButton>

          <IconButton>
            <Bell size={20} weight="regular" />
          </IconButton>

          <IconButton>
            <Sidebar size={20} weight="regular" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
