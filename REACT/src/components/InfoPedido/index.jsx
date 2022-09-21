import React from "react";
import { Link } from "react-router-dom";

import "./InfoPedido.css";

const InfoPedido = ({ idPedido, total, status, formaPagamento }) => {
  const precoTotal = String(total).substring(1, total.length).replace(",", "");
  console.log(precoTotal);
  return (
    <main className="pedido-info">
      <h2>Pedido nº {idPedido}</h2>
      <h2>Total: R$ {Number(precoTotal).toFixed(2)} </h2>
      <h2>{formaPagamento}</h2>
      <h2
        style={{
          backgroundColor:
            status === "Finalizado"
              ? "green"
              : status === "Cancelado"
              ? "red"
              : "yellow",
        }}
      >
        {status}
      </h2>
      <Link to={`/pedidos/Detalhes/${idPedido}`}>
        <h2>Detalhes</h2>
      </Link>
    </main>
  );
};

export default InfoPedido;
