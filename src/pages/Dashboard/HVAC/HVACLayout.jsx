import { Outlet } from "react-router-dom";
import HVACSideBar from "../../../components/SideBar/HVACSideBar";


export default function HVACLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><HVACSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
