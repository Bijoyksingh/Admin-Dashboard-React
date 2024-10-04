import SideBar from './SideBar'
import { AdminSideBarData } from '../../data/SidBarData/SideBarData'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mui/material'
import "./SideBar.css"

export default function AdminSideBar() {
  return (
    <SideBar>
        {AdminSideBarData.map((item, index)=>(
           <NavLink
           key={index}
           to={item.path}
           className={({ isActive, isPending, isTransitioning }) =>
             [
               isActive ? "active" : "",
               isPending ? "pending" : "",
               isTransitioning ? "transitioning" : "",
             ].join("")
           }
         >
           <li>
             {item.icon}
             {item.title}
           </li>
           <Divider  sx={{ height: 2, borderBottom: '2px solid white' }} />
         </NavLink> 
        ))}
    </SideBar>
  )
}
