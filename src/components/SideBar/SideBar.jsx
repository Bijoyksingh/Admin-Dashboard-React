import { SideBarData } from "../../data/SidBarData/SideBarData";
import { NavLink } from "react-router-dom";
import "./SideBar.css";



export default function SideBar() {
  return (
    <div id="sidebar" className="sidebar border">
      <ul>
        {SideBarData.map((item, index) => (
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
      </ul>
    </div>
  );
}
