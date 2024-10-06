import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const RequireAuth = ({ children, roles }) => {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!Array.isArray(roles)) {
    throw new Error("Roles must be an array");
  }

  if (!user.role) {
    throw new Error("User  role is missing");
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default RequireAuth;

RequireAuth.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

RequireAuth.defaultProps = {
  children: <Outlet />,
};
