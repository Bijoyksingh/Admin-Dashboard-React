import SideBar from "./SideBar"
import { EmsSideBarData } from "../../data/SidBarData/SideBarData"
import { NavLink } from "react-router-dom"

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
              ]
            }
          >
            <li className="text-wrap">
              {item.icon}
              <br />
              {item.title}
            </li>
            <hr />
            
          </NavLink>
        ))}
    </SideBar>
  )
}
