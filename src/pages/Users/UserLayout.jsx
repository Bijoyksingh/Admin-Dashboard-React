import { Outlet } from "react-router-dom";
import UserSideBar from "../../components/SideBar/UserSideBar";


export default function UserLayout() {
  return (
    <div className=" w-100">
        <div className=""><Outlet/></div>
    </div>
  )
}
