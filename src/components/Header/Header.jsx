import "./Header.css";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink } from "react-router-dom";
import { NavData } from "../../data/NavData/NavData";
import Logo from "/logo1.png"


const logoStyle = {
  width: "3rem",
  height: "auto",
  cursor: "pointer",
};

export default function Header() {
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
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                px: 0,
              }}
            >
              <motion.div
                className="box"
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
              >
                <Link to={"ems/home"}>
                  <img src={Logo} style={logoStyle} className="logo" alt="logo" />
                </Link>
              </motion.div>
            </Box>

            <Box
              className="gap-3 nav-items"
              sx={{
                flexGrow: 1,
                // maxWidth: { xs: 320, sm: 480, md:499 }
              }}
            >
              {NavData.map((item, index) => (
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
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                      {item.icon}{item.title}
                  </motion.div>
                </NavLink>
              ))}
            </Box>

            {/* avatar box  */}
            <Box>
            <Avatar
        alt="Remy Sharp"
        src="#"
        sx={{ background:"lightblue",width: 56, height: 56 }}
      />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
