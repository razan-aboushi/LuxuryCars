import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  let user;

  useEffect(() => {
    if (localStorage.getItem("currentUser"))
      user = JSON.parse(localStorage.getItem("currentUser"));
  });

  let isLoggedIn = user ? true : false;
  console.log("isLoggedIn", isLoggedIn);
  const [auth, setAuth] = useState(isLoggedIn);
  return (
    <>
      {" "}
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
