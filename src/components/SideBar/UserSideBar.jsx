import { NavLink } from "react-router-dom";
import { UserSideBarData } from "../../data/SidBarData/SideBarData";
import SideBar from "./SideBar";


export default function UserSideBar() {
  return (
   
      <SideBar>
      {UserSideBarData.map((item, index) => (
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
