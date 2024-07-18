import { Outlet } from "react-router-dom";
import DGSideBar from "../../../components/SideBar/DGSideBar";


export default function DGLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><DGSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
