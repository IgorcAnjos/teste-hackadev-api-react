import { useState, useEffect } from "react";
import { Auth } from ".";

const AuthProvider = ({ children }) => {
  // Funções pertinentes ao login
  const [login, setLogin] = useState(
    localStorage.login ? JSON.parse(localStorage.login) : []
  );

  const handleLoginAction = () => {
    setLogin([...login, { login: true }]);
    console.log(login);
  };

  useEffect(() => {
    localStorage.login = JSON.stringify(login);
  }, [login]);
  return <Auth.Provider value={{}}>{children}</Auth.Provider>;
};

export default AuthProvider;
