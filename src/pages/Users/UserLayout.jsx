import { Outlet } from "react-router-dom";
import UserSideBar from "../../components/SideBar/UserSideBar";
import { Container, Grid } from "@mui/material";


export default function UserLayout() {
  return (
    <Container maxWidth="xl" className="p-0">
<Grid container spacing={0.5}>
<Grid item xs={"none"} sm={"none"} md={1} lg={1}>
  <UserSideBar />
</Grid>
<Grid item xs={12} sm={6} md={11} lg={11}>
  <Outlet/>
</Grid>
</Grid>
</Container>
  )
}
