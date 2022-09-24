import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AtualizaPedidoContext } from "../../../contexts/AtualizaPedido";

const AtualizaPedido = () => {
  const { idPedido, idStatus, idFormaDePagamento } = useParams();

  const { urlApi } = useContext(AtualizaPedidoContext);

  const bodyAtualizaPedido = {
    status: idStatus,
    idFormaPagamento: idFormaDePagamento,
  };
  const [cont, setCont] = useState(0);

  console.log(idPedido, bodyAtualizaPedido, urlApi);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const postFetchData = (url, data) => {
    setCont(cont + 1);
    console.log(cont);
    const postFetchData = async () => {
      const resposta = await axios
        .put(url, data)
        .then((response) => {
          return response.data;
        })
        .catch(() => {
          return false;
        });
      return resposta;
    };

    const fetchData = async () => {
      return await postFetchData();
    };

    return fetchData();
  };
  useEffect(() => {
    if (cont === 0) {
      const AtualizandoPedido = postFetchData(
        `${urlApi}pedidos/info/${idPedido}`,
        bodyAtualizaPedido
      );
      AtualizandoPedido.then((resposta) => {
        console.log("sucesso");
        setLoading(false);
      }).catch((err) => {
        setError(true);
        console.log(err.message);
      });
    }
  }, [urlApi, bodyAtualizaPedido, cont]);

  return (
    <>
      {error === true ? (
        <h1>Houve um erro</h1>
      ) : loading === true ? (
        <h1>Gerando seu pedido</h1>
      ) : (
        <Navigate to={`/usuario`} replace />
      )}
    </>
  );
};

export default AtualizaPedido;
