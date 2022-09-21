import axios from "axios";
import { useState } from "react";

const HandlePedidos = ({ dataEst1, dataEst2, finalizar }) => {
  console.log(
    `dataEst1: ${dataEst1} dataEst2: ${dataEst2} finalizar: ${finalizar}`
  );
  let dataResponse = null;
  let error = null;
  let loading = true;
  let resposta = null;

  const url = process.env.REACT_APP_DEFURLAPI;
  const Estagio1 = (data) => {
    let status = true;
    axios
      .post(`${url}pedidos/novo`, data)
      .then((response) => {
        dataResponse = response.status;
        status = "ok";
      })
      .catch((err) => {
        error = { status: err.response.status, message: err.response.data };
      })
      .finally(() => {
        loading = false;
      });
    return status;
  };

  const Estagio2 = (data, idPedido) => {
    let status = true;
    axios
      .post(`${url}pedidos/produtos/novo/${idPedido}`, data)
      .then((response) => {
        dataResponse = response.status;
        status = "ok";
      })
      .catch((err) => {
        error = { status: err.response.status, message: err.response.data };
      })
      .finally(() => {
        loading = false;
      });
    return status;
  };

  const inserirPedidoProdutos = async () => {
    if (Estagio1(dataEst1) === "ok") {
      const status = Estagio2(dataEst2, dataResponse.id);
      if (status === "ok") {
        return "sucess";
      }
    }
  };

  if (dataEst1 !== null && dataEst2 !== null) {
    resposta = inserirPedidoProdutos();
  }
  console.log(`resposta: ${resposta}`);
  return resposta;
};

export default HandlePedidos;
