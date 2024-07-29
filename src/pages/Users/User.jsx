import { Button } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const devices = [
  {
    title: "Device No 1",
    path: "/user/device1",
  },
  {
    title: "Device No 2",
    path: "/user/device2",
  },
  {
    title: "Device No 3",
    path: "/user/device3",
  },
];

export default function User() {
  return (
    <div className="w-100 mt-3 ">
      {devices.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="p-3"
          >
           <Button>
              {item.title}
            </Button> 
          </NavLink>
        ))}

      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
}
