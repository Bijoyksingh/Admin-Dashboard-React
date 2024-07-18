import { Outlet } from "react-router-dom";
import WaterSideBar from "../../../components/SideBar/WaterSideBar";


export default function WaterLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><WaterSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
