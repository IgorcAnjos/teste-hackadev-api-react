import React from "react";
import { AtualizaPedidoContext } from ".";

const AtualizaPedidoProvider = ({ children }) => {
  const urlApi = process.env.REACT_APP_DEFURLAPI;

  return (
    <AtualizaPedidoContext.Provider
      value={{
        urlApi,
      }}
    >
      {children}
    </AtualizaPedidoContext.Provider>
  );
};

export default AtualizaPedidoProvider;
