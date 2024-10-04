import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, user: null });
 
  const handleAuthChange = (newAuth) => {
    setAuth(newAuth);
  };
 
  return (
    <AuthContext.Provider value={{auth, setAuth: handleAuthChange }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;