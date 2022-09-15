import React from "react";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { IoMdBarcode } from "react-icons/io";

import "./BotoesCheckout.css";

function BotoesCheckout({ formaDePagamento, setFormaDePagamento }) {
  return (
    <section className="formulario formas-pagamento">
      <div className="texto-descricao">
        <p className="formas-de-pagamento">Formas de pagamento</p>
      </div>
      <div className="select-formas-pagamento">
        <ul className="lista formas-pagamento">
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="cartao-credito"
              style={
                formaDePagamento === "cartaoCredito"
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento("cartaoCredito");
              }}
            >
              <BsFillCreditCard2FrontFill className="i" />
              <p className="texto-forma-pagamento">Cartão de Crédito</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="boleto"
              style={
                formaDePagamento === "boleto"
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento("boleto");
              }}
            >
              <IoMdBarcode className="i" />
              <p className="texto-forma-pagamento">Boleto</p>
            </button>
          </li>
          <li className="lista-pagamento item">
            <button
              className="selecao-forma"
              id="pix"
              style={
                formaDePagamento === "pix"
                  ? {
                      border: "1px solid #002855",
                      color: "#002855",
                      background: "#dcdfe5",
                    }
                  : {}
              }
              onClick={() => {
                setFormaDePagamento("pix");
              }}
            >
              <MdOutlineMobileFriendly className="i" />
              <p className="texto-forma-pagamento">PIX</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BotoesCheckout;
