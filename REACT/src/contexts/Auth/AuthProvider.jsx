import { useState } from "react";
import { Auth } from ".";
import useFetch from "../../Hooks/useFetch";
import useHandleAuthLoginFetch from "../../Utils/HandleAuthLoginFetch";

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const responseLogin = useHandleAuthLoginFetch(email, senha);

  const objetoUsuariosCadastradosFetch = useFetch(
    `${process.env.REACT_APP_DEFURLAPI}usuarios`,
    "get"
  );

  if (typeof responseLogin === "object") {
    localStorage.login = JSON.stringify(responseLogin);
  }

  const usuariosCadastrados =
    objetoUsuariosCadastradosFetch.dataResponse !== null
      ? objetoUsuariosCadastradosFetch.dataResponse
      : objetoUsuariosCadastradosFetch.error !== null
      ? false
      : true;

  console.log(usuariosCadastrados);
  return (
    <Auth.Provider
      value={{ responseLogin, setEmail, setSenha, usuariosCadastrados }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
