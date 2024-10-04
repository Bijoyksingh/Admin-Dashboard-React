import { Divider } from "@mui/material"
import { TransSideBarData } from "../../data/SidBarData/SideBarData"
import SideBar from "./SideBar"
import { NavLink } from "react-router-dom"

export default function TransSideBar() {
  return (
    <SideBar>
      {TransSideBarData.map((item, index) => (
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
