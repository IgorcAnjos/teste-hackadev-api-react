import React from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import InfoPedido from "../../InfoPedido";

import "./Pedidos.css";
import { useContext } from "react";
import { InfoUsuarios } from "../../../contexts/Clientes";
import { BsTypeH1 } from "react-icons/bs";

const Pedidos = () => {
  const { pedidosUsuario } = useContext(InfoUsuarios);
  console.log(pedidosUsuario);
  return (
    <main className="main">
      <section className="pedidos-main">
        <Header texto="Pedidos" />
        <section className="pedidos-status">
          {pedidosUsuario === true ? (
            <h1>Loading</h1>
          ) : pedidosUsuario === false ? (
            <h1>Erro</h1>
          ) : (
            pedidosUsuario.map((item) => (
              <InfoPedido
                idPedido={item.idPedido}
                total={item.precoTotal}
                status={item.status}
                formaPagamento={item.formaDePagamento}
              />
            ))
          )}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Pedidos;
