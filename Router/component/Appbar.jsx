import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const pages = ["Home", "About", "Contact"];

const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavigate = (page) => {
    if (page === "Home") navigate("/");
    if (page === "About") navigate("/About");
    if (page === "Contact") navigate("/Contact");
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "blue" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Left side - Bloom Text */}
          {/* <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "white" }}
                    >
                        Bloom
                    </Typography> */}

          {/* Right side - Menu items (desktop) */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: "white" }}
                onClick={() => handleNavigate(page)}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Right side - Menu icon (mobile) */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigate(page)}>
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
