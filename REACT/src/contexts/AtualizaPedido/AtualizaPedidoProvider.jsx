import React from "react";
import { AtualizaPedidoContext } from ".";

const AtualizaPedidoProvider = ({ children }) => {
  const urlApi = process.env.REACT_APP_DEFURLAPI;

  const idFormaDePagamento = JSON.parse(localStorage?.pagamento);

  const formaDePagamento =
    idFormaDePagamento === 1
      ? "Cartão de Credito"
      : idFormaDePagamento === 2
      ? "Boleto"
      : "Pix";

  return (
    <AtualizaPedidoContext.Provider
      value={{
        urlApi,
        formaDePagamento,
      }}
    >
      {children}
    </AtualizaPedidoContext.Provider>
  );
};

export default AtualizaPedidoProvider;
