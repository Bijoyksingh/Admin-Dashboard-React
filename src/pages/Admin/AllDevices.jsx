import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DeleteDevice, DevicesData } from "../../api/api";

import { NavLink } from "react-router-dom";
import SearchBar from "../../components/Main/Contents/SearchBar";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const tHead = [
  { title: "SL No." },
  { title: "Mac Id" },
  { title: "Device Name" },
  { title: "Party Code" },
  { title: "Current" },
  { title: "Temperature" },
  { title: "Vibration" },
  { title: "Parameter 1" },
  { title: "Parameter 2" },
  { title: "Parameter 3" },
  { title: "Parameter 4" },
  { title: "Parameter 5" },
  { title: "Parameter 6" },
  { title: "Parameter 7" },
  { title: "Parameter 8" },
  { title: "Parameter 9" },
  { title: "Parameter 10" },
  { title: "Actions", colSpan: 2 },
];

export default function AllDevices() {
  const { device } = DevicesData();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [dltId, setDltId] = useState("");
  const [severity, setSeverity] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [alert, setAlert] = useState(false);
  const handleClick = () => {
    setAlert(true);
  };
  const handleClickOpen = (deviceId) => {
    setDltId(deviceId);
    setOpen(true);
  };
  const handleDelete = () => {
    const id = dltId;
    DeleteDevice(id)
      .then((res) => {
        setMessage(res.data);
        setOpen(false);
        setSeverity("success");
        handleClick();
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.error("error while deleting Device:", err);
        setMessage("Error while adding user");
        setSeverity("error");
        setOpen(false);
        handleClick();
      });
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box sx={{ padding: "1rem" }}>
      <h1 className="text-center text-bg-primary rounded-pill">
        Manage Devices
      </h1>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <NavLink
          className="text-bg-primary rounded p-2 text-decoration-none"
          to="/admin/devices/addDevice"
          variant="contained"
        >
          Add Device
        </NavLink>
        <SearchBar onChange={handleSearch} value={search} />
      </Grid>
      {/* DevicesData */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 550 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow sx={{ fontWeight: "bold" }}>
                {tHead.map((item, index) => (
                  <TableCell key={index} colSpan={item.colSpan}>
                    {item.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {device
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.deviceName.toLowerCase().includes(search);
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.macId}</TableCell>
                    <TableCell>{item.deviceName}</TableCell>
                    <TableCell>{item.partyCode}</TableCell>
                    <TableCell>{item.current}</TableCell>
                    <TableCell>{item.temperature}</TableCell>
                    <TableCell>{item.vibration}</TableCell>
                    <TableCell>{item.parameter1}</TableCell>
                    <TableCell>{item.parameter2}</TableCell>
                    <TableCell>{item.parameter3}</TableCell>
                    <TableCell>{item.parameter4}</TableCell>
                    <TableCell>{item.parameter5}</TableCell>
                    <TableCell>{item.parameter6}</TableCell>
                    <TableCell>{item.parameter7}</TableCell>
                    <TableCell>{item.parameter8}</TableCell>
                    <TableCell>{item.parameter9}</TableCell>
                    <TableCell>{item.parameter10}</TableCell>
                    <TableCell className="d-flex">
                      <NavLink to={`/admin/devices/${item.deviceId}/edit`}>
                        <EditIcon />
                      </NavLink>
                      <Button
                        onClick={() => handleClickOpen(item.deviceId)}
                        color="error"
                        className="p-0"
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={device.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are You sure you want to Delete ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Device will be deleted from the database forever. If you still
            want to procced please type your Admin Password in to the box or
            Click on cancle to go back.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="justify-content-between">
          <TextField label="Admin Password" type="password" />
          <ButtonGroup>
            <Button
              variant="contained"
              color="error"
              sx={{ m: 1 }}
              autoFocus
              onClick={handleClose}
            >
              Cancle
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ m: 1 }}
              onClick={handleDelete}
              autoFocus
            >
              Confirm
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
      <Snackbar
      open={alert} 
      autoHideDuration={3000}
      >
      <Alert   variant="filled" severity={severity}>
  {message}
</Alert>
      </Snackbar>
    </Box>
  );
}
