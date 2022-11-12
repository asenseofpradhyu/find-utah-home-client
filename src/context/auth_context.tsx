import React, { useState } from "react";

const AuthContext = React.createContext({
  authToken: "",
  isLoggedin: false,
  login: (authToken: String) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  const intialToken = localStorage.getItem("token") as any;
  const [authToken, setauthToken] = useState(intialToken);

  const userIsLoggedIn = !!authToken;

  const loginHandler = (authToken: any) => {
    setauthToken(authToken);
    localStorage.setItem("token", authToken);
  };

  const logoutHandler = () => {
    setauthToken("");
    localStorage.removeItem("token");
  };

  const contextValue = {
    authToken: authToken,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
