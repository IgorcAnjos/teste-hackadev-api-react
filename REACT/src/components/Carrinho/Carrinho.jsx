import { React } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

import ProdutoCarrinho from "../ProdutoCarrinho/ProdutoCarrinho";

import "./Carrinho.css";

const Carrinho = ({
  abrirCarrinho,
  setAbrirCarrinho,
  listaCarrinho,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  subTotal,
  handleSubTotal,
  ListaDeProdutos,
  totalNoCarrinho,
}) => {
  return abrirCarrinho ? (
    <div className="sombra-carrinho">
      <div
        id="fundo-sair-carrinho"
        onClick={() => {
          setAbrirCarrinho(!abrirCarrinho);
        }}
      ></div>
      <nav className="carrinho">
        <section id="sair-quantidade">
          <div className="a">
            <AiOutlineArrowLeft
              id="sair-carrinho"
              onClick={() => {
                setAbrirCarrinho(!abrirCarrinho);
              }}
            />
            <p id="sacola">Sacola ({totalNoCarrinho})</p>
          </div>
        </section>
        <section className="secao-carrinho">
          <ul className="carrinho-produtos">
            {listaCarrinho.map((produto) => (
              <li key={produto.id}>
                <ProdutoCarrinho
                  produto={produto}
                  handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
                  handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
                  handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
                  handleSubTotal={handleSubTotal}
                  ListaDeProdutos={ListaDeProdutos}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="subtotal-finalizar">
          <p id="subtotal">Subtotal - R$ {subTotal}</p>
          <Link
            to={listaCarrinho.length > 0 ? `/checkout` : {}}
            className="link"
          >
            <button
              id="finalizar"
              style={
                listaCarrinho.length === 0
                  ? { background: "crimson", fontWeight: "bolder" }
                  : {}
              }
            >
              {listaCarrinho.length === 0 ? "Sacola Vazia" : "Finalizar"}
            </button>
          </Link>
        </section>
      </nav>
    </div>
  ) : (
    ""
  );
};

export default Carrinho;
