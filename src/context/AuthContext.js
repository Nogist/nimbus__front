import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
   token: ""
  });

  const setUserAuthInfo = (data) => {
   localStorage.setItem("nm-token", data);
   setAuthState({token: data})
 };

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => {
    const tkn = localStorage.getItem("nm-token")
  if (!tkn) {
    return false;
  }
  else{
    return true;
  }
 };

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };