 import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [userlogin, setUserLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('usertoken');
    if (token !== null) {
      setUserLogin(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userlogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}
