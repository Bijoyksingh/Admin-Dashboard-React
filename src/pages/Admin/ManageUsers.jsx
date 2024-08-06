import { useState } from "react";
import {
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
import SearchBar from "../../components/Main/Contents/SearchBar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";
import { DeleteUser, UsersData } from "../../api/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const tHead = [
  { title: "SL No." },
  { title: "Username" },
  { title: "Name" },
  { title: "Contact" },
  { title: "Email" },
  { title: "Alloted Devices" },
  { title: "Actions", colSpan: 2 },
];

export default function ManageUsers() {
  const { data } = UsersData();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [dltId, setDltId] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (id) => {
    setDltId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  

  const handleDelete = () => {
    const id = dltId;
    DeleteUser(id)
      .then((res) => {
        setOpen(false);
        window.location.reload();
        alert(res.data);
      })
      .catch((err) => {
        console.error("error while deleting user:", err);
        alert("Error while remove user");
      });
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <h1>Manage Users</h1>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <NavLink
          className="text-bg-primary rounded p-2 text-decoration-none"
          to={"/admin/users/adduser"}
          variant="contained"
        >
          <PersonAddIcon /> Add User
        </NavLink>
        <SearchBar onChange={handleSearch} value={search} />
      </Grid>
      {/* Data Table */}
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
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.fullname.toLowerCase().includes(search);
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.fullname}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.alotdevices}</TableCell>
                    <TableCell className="d-flex">
                      <NavLink to={`/admin/users/${item.id}/edit`}>
                        <EditIcon />
                      </NavLink>
                      <Button
                        onClick={() => handleClickOpen(item.id)}
                        color="error"
                        className="p-0"
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
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
            The User will be deleted from the database forever. If you still
            want to procced please type your Admin Password in to the box.
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
    </Box>
  );
}
