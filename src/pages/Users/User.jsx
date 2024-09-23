import { Alert, AlertTitle, Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

export default function User() {
  return (
    <div className="w-100 mt-3 d-flex justify-content-around">
      <Box className="border border-5 border-primary rounded " sx={{width:"30rem", }}>
        <h1 className="text-center">Total Devices Aloted</h1>
        <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElectricBoltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElectricBoltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
      </Box>
      <Box className="border border border-5 border-primary rounded" sx={{width:"30rem", }}>
        <h1 className="text-center">Total Devices Aloted</h1>
        <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElectricBoltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ElectricBoltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="2" secondary="Jan 9, 2014" />
      </ListItem>
      </List>
      </Box>
      {/* <div className="mt-3">
        <Outlet />
      </div> */}
    </div>
  );
}
