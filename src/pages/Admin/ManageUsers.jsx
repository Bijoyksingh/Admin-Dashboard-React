import { useEffect, useState } from "react"
import axios from "axios";
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import SearchBar from "../../components/Main/Contents/SearchBar";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const tHead =['SL No.','Username','Name','Contact','Email','Alloted Devices',]



export default function ManageUsers() {
  
  const [data, setData]= useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

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
  
  useEffect(()=>{
    axios.get('/api/user')
    .then( (response)=> {
      // handle success
      setData(response.data.users);
    })
    .catch((error)=> {
      // handle error
      console.log(error);
    })
  })

  

  return (
    <Box sx={{padding:'1rem'}}>
    <h1>Manage Users</h1>
    <Grid container alignItems={"center"} justifyContent={"space-between"}>
      <Button variant="contained">
        <PersonAddIcon/> Add User</Button>
    <SearchBar onChange={handleSearch} value={search}/>
    </Grid>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
    <Table stickyHeader aria-label="sticky table">
    <TableHead>
    <TableRow>
    {tHead.map((item, index) => (
      <TableCell 
      key={index}>{item}</TableCell>
    ))}
    </TableRow>
    </TableHead>
    <TableBody>
      {
        data
        .filter((item) => {
          return search.toLowerCase() === ''
            ? item
            : item.fullname.toLowerCase().includes(search);
        })
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((item, index) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={index}>
            <TableCell>{index+1}</TableCell>
            <TableCell>{item.username}</TableCell>
            <TableCell>{item.fullname}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.alotdevices}</TableCell>
          </TableRow>
        ))
      }
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
      </Box>
  )
}
