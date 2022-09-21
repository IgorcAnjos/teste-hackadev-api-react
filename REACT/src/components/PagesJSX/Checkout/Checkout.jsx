import { React, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import BotoesCheckout from "../../BotoesCheckout/BotoesCheckout";
import PagamentoCartao from "../../PagamentoCartao/PagamentoCartao";
import DetalhesCompra from "../../DetalhesCompra/DetalhesCompra";

import "./Checkout.css";

import { useContext } from "react";
import { CarrinhoContext } from "../../../contexts/Carrinho";
import { InfoUsuarios } from "../../../contexts/Clientes";

const Checkout = () => {
  const [loading, setloading] = useState(false);
  const { listaCarrinho } = useContext(CarrinhoContext);
  const {
    setIdFormaDePagamento,
    setUsuario,
    setListaCarrinho,
    efeturarPedidos,
  } = useContext(InfoUsuarios);
  const [formaDePagamento, setFormaDePagamento] = useState(1);

  const UsuarioLogado = localStorage.login
    ? JSON.parse(localStorage.login)
    : false;
  // console.log(UsuarioLogado);
  const email = UsuarioLogado ? UsuarioLogado.email : "";
  return (
    <div className="checkout-container">
      <Header texto="Seu Pedido" />
      <div className="secao-usuario">
        <p className="titulo">Usuário:</p>
        <p className="email">{email}</p>
      </div>
      <BotoesCheckout
        setFormaDePagamento={setFormaDePagamento}
        formaDePagamento={formaDePagamento}
      />
      {formaDePagamento === 1 ? (
        <PagamentoCartao listaCarrinho={listaCarrinho} />
      ) : (
        ""
      )}
      <DetalhesCompra listaCarrinho={listaCarrinho} />
      <section className="finalizar-compra">
        <Link to="#" className="comprar">
          <button
            className="botao-comprar"
            onClick={() => {
              setloading(true);
              setIdFormaDePagamento(formaDePagamento);
              setListaCarrinho(listaCarrinho);
              setUsuario(UsuarioLogado);
              let status = true;
              setTimeout(() => {
                status = efeturarPedidos();
              }, 100);
              if (status === "ok") {
                setloading(false);
              }
            }}
          >
            Finalizar Pedido
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;
