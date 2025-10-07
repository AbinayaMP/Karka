import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)"); // 👈 only true on mobile

  const sections = [
    { id: "bio", label: "Bio" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // close drawer when clicked
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: "#0A192F" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          border: "2px solid white",
          borderRadius: "15px",
          px: 2,
          py: 1,
          maxWidth: "900px",
          width: "100%",
          mx: "auto",
        }}
      >
        {/* Left Side - Always Visible Name */}
        <Typography
          onClick={() => handleScroll("home")}
          sx={{
            fontFamily: "'Monoton', cursive",
            fontSize: { xs: "1.5rem", md: "2.2rem" },
            fontWeight: "bold",
            color: "#64FFDA",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Abinaya
        </Typography>

        {/* Right Side - Desktop shows menu, Mobile shows hamburger */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile Menu */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ width: 200, bgcolor: "#0A192F", height: "100%" }}>
                {sections.map((section) => (
                  <ListItem key={section.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleScroll(section.id)}
                      sx={{ color: "#64FFDA", fontWeight: "bold" }}
                    >
                      {section.label}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="inherit"
                onClick={() => handleScroll(section.id)}
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  "&:hover": { color: "#64FFDA" },
                }}
              >
                {section.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
