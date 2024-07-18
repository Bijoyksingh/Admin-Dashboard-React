import { Outlet } from "react-router-dom";
import NBSafeSideBar from "../../../components/SideBar/NBSafeSideBar";


export default function NBSafeLayout() {
  return (

      <div className='d-flex w-100'>
  <div className='col-1'><NBSafeSideBar/></div>
  <div className='col-11'><Outlet/></div>
  </div> 

  )
}
