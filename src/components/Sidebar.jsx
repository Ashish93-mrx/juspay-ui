import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  ChartPieSlice,
  CaretRight,
  ShoppingBagOpen,
  Folder,
  BookOpen,
  CaretDown,
  IdentificationBadge,
  ChatsCircle,
  Notebook,
  UsersThree,
  IdentificationCard,
} from "phosphor-react";
import { Drawer, Box, Avatar, Typography, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const theme = useTheme();
  const location = useLocation();
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const drawerWidth = 212;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          //   width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "1px solid rgba(0,0,0,0.06)",
          bgcolor: "background.paper",
          pt: 2.5, // 20px
          pr: 2, // 16px
          pb: 2.5, // 20px
          pl: 2, // 16px
          display: "flex",
          flexDirection: "column",
          gap: 2, // 16px
        },
      }}
    >
      <Box
        sx={{
          width: 180,
          height: 32,
          borderRadius: 1, // 8px
          p: 0.5, // 4px
          display: "flex",
          alignItems: "center",
          gap: 1, // 8px
        }}
      >
        <Box
          sx={{
            width: 90,
            height: 24,
            borderRadius: 1, // 8px
            // opacity: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: "primary.main",
              fontSize: 14,
              src: "https://i.pravatar.cc/40?img=18",
            }}
          ></Avatar>
          <Box
            sx={{
              width: 58,
              height: 20,
              opacity: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
              }}
            >
              ByeWind
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: 180,
          height: 104,
          display: "flex",
          flexDirection: "column",
          pb: 1.5, // 12px
          gap: 0.5, // 4px
        }}
      >
        {/* Tabs: Favorites / Recently */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: 1, // 8px
            gap: 1, // 8px
            opacity: 1,
            //   mb: 1,
          }}
        >
          <Box
            sx={{
              width: 78,
              height: 28,
              px: 1, // 8px left/right
              py: 0.5, // 4px top/bottom
              gap: 0.5, // 4px
              borderRadius: 1, // 8px
              // bgcolor: '#1C1C1C66',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 62,
                height: 20,
                borderRadius: 1, // 8px
                opacity: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.info.main
                      : theme.palette.info.secondary,
                }}
              >
                Favorites
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 74,
              height: 28,
              px: 1, // 8px left/right
              py: 0.5, // 4px top/bottom
              gap: 0.5, // 4px
              borderRadius: 1, // 8px
              // bgcolor: '#1C1C1C66', 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 58,
                height: 20,
                borderRadius: 1, // 8px
                opacity: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.info.main
                      : theme.palette.info.secondary,
                }}
              >
                Recently
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* List items */}
        <Box>
          <Box
            sx={{
              width: 180,
              height: 28,
              borderRadius: 1, // 8px
              px: 1, // 8px left/right
              py: 0.5, // 4px top/bottom
              gap: 0.5, // 4px
              opacity: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 164,
                height: 20,
                borderRadius: 1, // 8px
                opacity: 1,
                display: "flex",
                alignItems: "center",
                gap: 0.5, // 4px
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    bgcolor: "#1C1C1C33",
                    position: "absolute",
                    top: 5,
                    left: 5,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: 63,
                  height: 20,
                  borderRadius: 1, // 8px
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px !important",
                    letterSpacing: 0,
                  }}
                >
                  Overview
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: 180,
              height: 28,
              borderRadius: 1, // 8px
              px: 1, // 8px left/right
              py: 0.5, // 4px top/bottom
              gap: 0.5, // 4px
              opacity: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Dot container */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {/* Inner dot */}
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#1C1C1C33",
                  position: "absolute",
                  top: 5,
                  left: 5,
                }}
              />
            </Box>

            <ListItemText
              primary="Projects"
              primaryTypographyProps={{ variant: "body2", fontSize: 14 }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: 180,
          height: 168,
          display: "flex",
          flexDirection: "column",
          pb: 1.5, //
          gap: 0.5, //
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: 1, // 8px
            gap: 1, // 8px
            opacity: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 156,
              height: 20,
            }}
          >
            <Typography
              sx={{
                ml: 1,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "#1C1C1C66",
              }}
            >
              Dashboards
            </Typography>
          </Box>
        </Box>

        <Box
          component={Link}
          to="/dashboard"
          sx={{
            textDecoration: "none",
            color: "inherit", //
            display: "block", //
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 180,
              height: 28,
              borderRadius: "8px",
              pt: 0.5,
              pr: 1.0,
              pb: 0.5,
              gap: 0.5,
              opacity: 1,
              bgcolor: "#1C1C1C0D",
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 4,
                  height: 16,
                  borderRadius: 1,
                  top: 2,
                  bgcolor: "#000000",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: 144,
                height: 20,
                borderRadius: 1,
                gap: 0.5,
              }}
            >
              <ChartPieSlice size={20} weight="duotone" />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "inherit",
                }}
              >
                Default
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component={Link}
          to="/orders"
          sx={{
            textDecoration: "none",
            color: "inherit", //
            display: "block", //
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 180,
              height: 28,
              borderRadius: "8px",
              pt: 0.5,
              pr: 1.0,
              pb: 0.5,
              gap: 0.5,
              opacity: 1,
              //   bgcolor: "#1C1C1C0D"
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 20,
                borderRadius: 1, // 8px
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 1,
              }}
            >
              {/* Left: Selected indicator (hidden by default) */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 1, // 8px
                  bgcolor: "primary.main",
                  opacity: 0, // hidden until selected
                }}
              />

              {/* Right: ArrowLineRight icon */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 1,
                }}
              >
                <CaretRight size={16} weight="regular" color="#1C1C1C33" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: 144,
                height: 20,
                borderRadius: 1,
                gap: 0.5,
              }}
            >
              <ShoppingBagOpen size={20} weight="duotone" />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "inherit",
                }}
              >
                eCommerce
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component={Link}
          to="/orders"
          sx={{
            textDecoration: "none",
            color: "inherit", //
            display: "block", //
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 180,
              height: 28,
              borderRadius: "8px",
              pt: 0.5,
              pr: 1.0,
              pb: 0.5,
              gap: 0.5,
              opacity: 1,
              //   bgcolor: "#1C1C1C0D"
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 20,
                borderRadius: 1, // 8px
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 1,
              }}
            >
              {/* Left: Selected indicator (hidden by default) */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 1, // 8px
                  bgcolor: "primary.main",
                  opacity: 0, // hidden until selected
                }}
              />

              {/* Right: ArrowLineRight icon */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 1,
                }}
              >
                <CaretRight size={16} weight="regular" color="#1C1C1C33" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: 144,
                height: 20,
                borderRadius: 1,
                gap: 0.5,
              }}
            >
              <Folder size={20} weight="duotone" />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "inherit",
                }}
              >
                Projects
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component={Link}
          to="/orders"
          sx={{
            textDecoration: "none",
            color: "inherit", //
            display: "block", //
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 180,
              height: 28,
              borderRadius: "8px",
              pt: 0.5,
              pr: 1.0,
              pb: 0.5,
              gap: 0.5,
              opacity: 1,
              //   bgcolor: "#1C1C1C0D"
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 20,
                borderRadius: 1, // 8px
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 1,
              }}
            >
              {/* Left: Selected indicator (hidden by default) */}
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 1, // 8px
                  bgcolor: "primary.main",
                  opacity: 0, // hidden until selected
                }}
              />

              {/* Right: ArrowLineRight icon */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 1,
                }}
              >
                <CaretRight size={16} weight="regular" color="#1C1C1C33" />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: 144,
                height: 20,
                borderRadius: 1,
                gap: 0.5,
              }}
            >
              <BookOpen size={20} weight="duotone" />
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                  color: "inherit",
                }}
              >
                Online Courses
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: 180,
          height: 360,
          display: "flex",
          flexDirection: "column",
          pb: 1.5, //
          gap: 0.5, //
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: 1, // 8px
            gap: 1, // 8px
            opacity: 1,
            //   mb: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 156,
              height: 20,
            }}
          >
            <Typography
              sx={{
                ml: 1,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "#1C1C1C66",
              }}
            >
              Pages
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              <CaretDown size={16} weight="regular" color="#1C1C1C33" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <IdentificationBadge size={20} weight="duotone" />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              User Profile
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              {/* <CaretDown size={16} weight="regular" color="#1C1C1C33"/> */}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            {/* <IdentificationBadge size={20} weight="duotone" /> */}
            <Box
              sx={{
                width: 20,
                height: 20,
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Overview
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              {/* <CaretDown size={16} weight="regular" color="#1C1C1C33"/> */}
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Projects
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Campaigns
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Documents
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            ></Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 20,
                height: 20,
              }}
            ></Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Followers
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              <CaretRight size={16} weight="regular" color="#1C1C1C33" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <IdentificationCard size={20} weight="duotone" />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Account
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              <CaretRight size={16} weight="regular" color="#1C1C1C33" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <UsersThree size={20} weight="duotone" />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Corporate
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              <CaretRight size={16} weight="regular" color="#1C1C1C33" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <Notebook size={20} weight="duotone" />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Blog
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 180,
            height: 28,
            borderRadius: "8px",
            pt: 0.5,
            pr: 1.0,
            pb: 0.5,
            gap: 0.5,
            opacity: 1,
            //   bgcolor: "#1C1C1C0D"
          }}
        >
          <Box
            sx={{
              width: 24,
              height: 20,
              borderRadius: 1, // 8px
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 1,
            }}
          >
            {/* Left: Selected indicator (hidden by default) */}
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: 1, // 8px
                bgcolor: "primary.main",
                opacity: 0, // hidden until selected
              }}
            />

            {/* Right: ArrowLineRight icon */}
            <Box
              sx={{
                width: 16,
                height: 16,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
              }}
            >
              <CaretRight size={16} weight="regular" color="#1C1C1C33" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: 144,
              height: 20,
              borderRadius: 1,
              gap: 0.5,
            }}
          >
            <ChatsCircle size={20} weight="duotone" />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: 0,
                color: "inherit",
              }}
            >
              Social
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
