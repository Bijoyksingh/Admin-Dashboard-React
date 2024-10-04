import { Outlet } from "react-router-dom";
import EmsSidebar from "../../../components/SideBar/EmsSideBar";
import { Grid } from "@mui/material";


export default function EmsLayout() {
  return (
    <Grid container justifyContent={"space-evenly"}>
    <Grid item xs={"none"} sm={"none"} md={2} lg={"none"} xl={1.5}>
      <EmsSidebar />
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
      <Outlet />
    </Grid>
  </Grid>
  )
}
