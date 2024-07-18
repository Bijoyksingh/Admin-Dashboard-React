import SideBar from "./SideBar"
import { UPSSideBarData } from "../../data/SidBarData/SideBarData"
import { NavLink } from "react-router-dom"

export default function UPSSideBar() {
  return (
      <SideBar>
      {UPSSideBarData.map((item, index) => (
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
