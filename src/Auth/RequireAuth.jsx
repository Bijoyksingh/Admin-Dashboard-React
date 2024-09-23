import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";


    // const RequireAuth = ({ allowedRoles }) => {
    //     const { auth } = useAuth();
    //     const location = useLocation();
    
    //     return (
    //         auth?.roles?.find(role => allowedRoles?.includes(role))
    //             ? <Outlet />
    //             : auth?.user
    //                 ? <Navigate to="/unauthorized" state={{ from: location }} replace />
    //                 : <Navigate to="/signin" state={{ from: location }} replace />
    //     );
    // }
// method 2
// const RequireAuth = () => {
//     const { auth } = useAuth();
//     const location = useLocation();

//     return (
//         auth?.user
//             ? <Outlet />
//             : <Navigate to="/signin" state={{ from: location }} replace />
//     );
// }

// method 3
// const RequireAuth = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const navigate = useNavigate();
//     const cookies = new Cookies();

//     useEffect(() => {
//         const token = cookies.get('token');
//         if (token) {
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//         }
//       }, []);
  
//     if (!isAuthenticated) {
//       // Redirect to login page or display an error message
//       return navigate("/signin");
//     }
  
//     return children;
//   };

//method 4
const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    
  
    if (auth?.roles?.some(role => allowedRoles.includes(role))) {
      return <Outlet />;
    }
  
    if (auth?.roles?.includes('admin')) {
      return <Navigate to="/admin" state={{ from: location }} replace />;
    }
  
    if (auth?.roles?.includes('user')) {
      return <Navigate to="/user" state={{ from: location }} replace />;
    }
  
    return <Navigate to="/signin" state={{ from: location }} replace />;
  };

export default RequireAuth;