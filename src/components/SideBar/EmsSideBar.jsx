import SideBar from "./SideBar"
import { EmsSideBarData } from "../../data/SidBarData/SideBarData"
import { NavLink } from "react-router-dom"
import "./SideBar.css"
import { Divider } from "@mui/material"

export default function EmsSidebar() {
  return (
      <SideBar>
      {EmsSideBarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
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
