import {  Outlet } from "react-router-dom";
import AdminSideBar from "../../components/SideBar/AdminSideBar";
import { Container, Grid } from "@mui/material";

export default function AdminLayout() {
  return (
  //   <div className='d-flex w-100'>
  // <div className='col-1'><AdminSideBar/></div>
  // <div className='col-11'><Outlet/></div>
  // </div> 
<Container maxWidth="xl" className="p-0">
<Grid container spacing={0.5}>
<Grid item xs={"none"} sm={"none"} md={1} lg={1}>
  <AdminSideBar />
</Grid>
<Grid item xs={12} sm={6} md={11} lg={11}>
  <Outlet/>
</Grid>
</Grid>
</Container>
  );
}
