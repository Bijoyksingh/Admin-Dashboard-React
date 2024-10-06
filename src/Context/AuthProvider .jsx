import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [auth, setAuth] = useState({ user: cookies.user, });

  const handleAuthChange = (newAuth, rememberMe) => {
    setAuth(newAuth);
    if (rememberMe) {
      setCookie('user', newAuth.user, { maxAge: 86400 }); // store for 1 day
    } else {
      removeCookie('user');
    }
    // setCookie("user", newAuth.user, {maxAge: 86400 });
  };

  const handleLogout = () => {
    setAuth({ user: null });
    removeCookie("user");
  };

  useEffect(() => {
    if (cookies.user) {
      setAuth({ user: cookies.user });
    }
  }, [cookies.user]);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth: handleAuthChange, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
