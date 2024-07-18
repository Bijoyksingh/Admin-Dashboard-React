import { Outlet } from "react-router-dom";
import TransSideBar from "../../../components/SideBar/TransSideBar";


export default function TransLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><TransSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
