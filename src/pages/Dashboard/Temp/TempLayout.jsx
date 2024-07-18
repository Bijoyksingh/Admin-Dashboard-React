import { Outlet } from "react-router-dom";
import TempSideBar from "../../../components/SideBar/TempSideBar";


export default function TempLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><TempSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
