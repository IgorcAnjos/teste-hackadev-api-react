import React from "react";
import useFetch from "../../Hooks/useFetch";

const useHandleAuthLoginFetch = (email, senha) => {
  const url = `http://localhost/login/${email}/${senha}`;
  const method = "get";

  const objetoFetchLogin = useFetch(url, method);

  const response =
    objetoFetchLogin.dataResponse !== null
      ? objetoFetchLogin.dataResponse
      : objetoFetchLogin.error !== null
      ? false
      : true;

  return response;
};

export default useHandleAuthLoginFetch;
