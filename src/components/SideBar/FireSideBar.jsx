import { FireSideBarData } from "../../data/SidBarData/SideBarData"
import SideBar from "./SideBar"
import { NavLink } from "react-router-dom"

export default function FireSideBar() {
  return (
    <SideBar>
      {FireSideBarData.map((item, index) => (
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
            <li>
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
