import { Box } from "@mui/material";
import "./SideBar.css";
import { useOutletContext } from "react-router-dom";
import PropTypes from 'prop-types';

export default function SideBar({ children }) {
  const { open, handleClose } = useOutletContext();

  return (
    <>
      {open && (
        <Box
          sx={{ display: { sm: "flex", md: "none" } }}
          open={open}
          onClick={handleClose(false)}
          id="sidebar"
          className="sidebar"
        >
          <ul>{children}</ul>
        </Box>
      )}
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        id="sidebar"
        className="sidebar"
      >
        <ul>{children}</ul>
      </Box>
    </>
  );
}

SideBar.propTypes = {
  children:PropTypes.node
}
