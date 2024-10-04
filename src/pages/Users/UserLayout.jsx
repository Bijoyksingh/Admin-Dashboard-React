import { Outlet } from "react-router-dom";
import UserSideBar from "../../components/SideBar/UserSideBar";
import { Grid } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";


export default function UserLayout() {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    // isAuthenticated && (
      <Grid container justifyContent={"space-evenly"}>
      <Grid item xs={"none"} sm={"none"} md={2} lg={"none"} xl={1.5}>
        <UserSideBar />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={10} xl={10}>
        <Outlet />
      </Grid>
    </Grid>
    // )
  );
}
