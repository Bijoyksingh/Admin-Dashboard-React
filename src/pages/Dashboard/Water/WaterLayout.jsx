import { Outlet } from "react-router-dom";
import WaterSideBar from "../../../components/SideBar/WaterSideBar";
import { Grid } from "@mui/material";


export default function WaterLayout() {
  return (
<Grid container justifyContent={"space-evenly"}>
      <Grid item xs={"none"} sm={"none"} md={2} lg={"none"} xl={1.5}>
        <WaterSideBar />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
