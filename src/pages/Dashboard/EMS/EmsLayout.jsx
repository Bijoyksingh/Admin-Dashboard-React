import { Outlet } from "react-router-dom";
import EmsSidebar from "../../../components/SideBar/EmsSideBar";


export default function EmsLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><EmsSidebar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
