import { Outlet } from "react-router-dom";
import FireSideBar from "../../../components/SideBar/FireSideBar";


export default function FireLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><FireSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
