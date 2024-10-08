import "./Header.css";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink } from "react-router-dom";
import { NavData } from "../../data/NavData/NavData";
import Logo from "/logo1.png";
import { IconButton, Menu, MenuItem, Tabs } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "../../Context/AuthProvider ";

const logoStyle = {
  width: "3rem",
  height: "auto",
  cursor: "pointer",
};

export default function Header({ onClick }) {
  const { auth, logout } = useContext(AuthContext);
  const user = auth.user;
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "space-between",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "#8dade0",
              // theme.palette.mode === "light"
              //   ? "rgba(255, 255, 255, 0.4)"
              //   : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={onClick}
              sx={{ flexGrow: 1, display: { sm: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "flex" },
                justifyContent: "flex-start",
                px: 0,
              }}
            >
              <motion.div
                className="box"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
              >
                <Link to={"/"}>
                  <img
                    src={Logo}
                    style={logoStyle}
                    className="logo"
                    alt="logo"
                  />
                </Link>
              </motion.div>
            </Box>

            <Box
              className="gap-3 nav-items overflow-x-auto"
              sx={{
                flexGrow: 1,
              }}
            >
              <Tabs
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                {NavData.filter(item => !item.authenticated || auth.user && item.userRole.includes(user.role)).map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive, isPending, isTransitioning }) =>
                      [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")
                    }
                  >
                    <motion.div
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {item.icon}
                      {item.title}
                    </motion.div>
                  </NavLink>
                ))}
              </Tabs>
            </Box>

            {/* avatar section */}
            { auth.user ? (
            <Box >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt={user.fullname}
                src="#"
                sx={{ flexGrow: 1, background: "lightblue" }}
              />
              </IconButton>
              <Menu
              sx={{ mt: 1.5, }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >
          <h5 className="text-center bg-primary text-light p-3">{user.fullname}</h5>
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={logout}><NavLink className="text-dark text-decoration-none p-1" to={"/"}>Logout</NavLink><LogoutIcon/></MenuItem>
      </Menu>
            </Box>
            ):(<NavLink className="login" to={"/login"} >LOG IN/SIGN UP</NavLink>)}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
Header.propTypes = {
  onClick: PropTypes.func,
};
