import React, { useState } from "react";

const AuthContext = React.createContext({
  authToken: "",
  isLoggedin: false,
  userData: {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  },
  login: (authToken: String, userInfo: {}) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: any) => {
  const intialToken = localStorage.getItem("token") as any;
  const intialuserIfo = JSON.parse(localStorage.getItem("userInfo") as any);
  const [authToken, setauthToken] = useState(intialToken);
  const [userInfo, setuserInfo] = useState<{
    id: "";
    first_name: "";
    last_name: "";
    email: "";
    phone: "";
  }>(intialuserIfo);

  const userIsLoggedIn = !!authToken;

  const loginHandler = (authToken: any, userInfo: any) => {
    setauthToken(authToken);
    setuserInfo({
      id: userInfo.id,
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email: userInfo.email,
      phone: userInfo.phone,
    });
    localStorage.setItem("token", authToken);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  const logoutHandler = () => {
    setauthToken("");
    setuserInfo({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
  };

  const contextValue = {
    authToken: authToken,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userData: userInfo,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
