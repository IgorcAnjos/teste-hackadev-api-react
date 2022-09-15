import React from "react";
import { Auth } from ".";

const AuthProvider = ({ children }) => {
  return <Auth.Provider>{children}</Auth.Provider>;
};

export default AuthProvider;
