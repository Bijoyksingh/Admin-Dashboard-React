import { Outlet } from "react-router-dom";
import UPSSideBar from "../../../components/SideBar/UPSSideBar";


export default function UPSLayout() {
  return (
      <div className='d-flex w-100'>
  <div className='col-1'><UPSSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 
  )
}
