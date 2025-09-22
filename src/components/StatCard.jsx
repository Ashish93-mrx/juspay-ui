import { Card, CardContent, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { TrendDown, TrendUp } from "phosphor-react";

export default function StatCard({
  title,
  value,
  delta,
  bgLight,
  bgDark,
  textDarkMode,
}) {
  const theme = useTheme();
  const positive = Number(delta) >= 0;

  const textColor =
    theme.palette.mode === "dark" && textDarkMode
      ? textDarkMode
      : theme.palette.text.primary;

  const subTextColor =
    theme.palette.mode === "dark" && textDarkMode
      ? textDarkMode
      : theme.palette.text.secondary;

  return (
    <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.99 }}>
      <Card
        sx={{
          minWidth: 200,
          borderRadius: 2,
          bgcolor: theme.palette.mode === "light" ? bgLight : bgDark,
          height: 112,
          p: 3,
          transition: "background 0.3s ease",
        }}
        elevation={0}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Title */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 154,
              height: 20,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: textColor,
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Value + Delta */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 154,
              height: 36,
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "24px",
                lineHeight: "36px",
                letterSpacing: 0,
                color: textColor,
              }}
            >
              {value}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  lineHeight: "20px",
                  color: textColor,
                }}
              >
                {positive ? `+${Math.abs(delta)}%` : `-${Math.abs(delta)}%`}
              </Typography>
              {positive ? (
                <TrendUp size={16} color={textColor} /> 
              ) : (
                <TrendDown size={16} color={textColor} />
              )}
              
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}