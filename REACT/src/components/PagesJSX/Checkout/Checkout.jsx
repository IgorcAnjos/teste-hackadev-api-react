import { React, useState } from "react";
import { Link } from "react-router-dom";

import InputCheckout from "../../InputCheckout/InputCheckout";
import Header from "../../Header/Header";
import BotoesCheckout from "../../BotoesCheckout/BotoesCheckout";
import PagamentoCartao from "../../PagamentoCartao/PagamentoCartao";
import DetalhesCompra from "../../DetalhesCompra/DetalhesCompra";

import "./Checkout.css";

const Checkout = ({ listaCarrinho }) => {
  const [formaDePagamento, setFormaDePagamento] = useState("cartaoCredito");
  return (
    <div className="checkout-container">
      <Header texto="Seu Pedido" />
      <InputCheckout
        texto="Nome Completo"
        type="text"
        nome="nome-completo"
        id="nome-completo"
        size="50"
        maxlength="50"
      />
      <InputCheckout
        texto="E-mail"
        type="E-mail"
        nome="Email"
        id="Email"
        size="30"
        maxlength="30"
      />
      <InputCheckout
        texto="Confirme seu E-mail"
        type="E-mail"
        nome="Email"
        id="confirma-Email"
        size="30"
        maxlength="30"
      />
      <BotoesCheckout
        setFormaDePagamento={setFormaDePagamento}
        formaDePagamento={formaDePagamento}
      />
      {formaDePagamento === "cartaoCredito" ? (
        <PagamentoCartao listaCarrinho={listaCarrinho} />
      ) : (
        ""
      )}
      <DetalhesCompra listaCarrinho={listaCarrinho} />
      <section className="finalizar-compra">
        <Link to="/" className="comprar">
          <button className="botao-comprar">COMPRAR</button>
        </Link>
      </section>
    </div>
  );
};

export default Checkout;
