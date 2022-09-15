import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

import "./Produto.css";
import FacaLogin from "../../FacaLogin/FacaLogin";

const Produto = ({
  ListaDeProdutos,
  listaCarrinho,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  subTotal,
  handleSubTotal,
  setBuscar,
  login,
}) => {
  const parametros = useParams();

  const idParamentro = parseInt(parametros.id);

  const findProduto = ListaDeProdutos.filter(
    (produto) => produto.id === idParamentro
  ); //

  const produto = findProduto[0];

  return (
    <div className="cont">
      <Navbar
        listaCarrinho={listaCarrinho}
        handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
        handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
        handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
        subTotal={subTotal}
        handleSubTotal={handleSubTotal}
        ListaDeProdutos={ListaDeProdutos}
        setBuscar={setBuscar}
        login={login}
      />
      <div className="espacamento"></div>
      {login.length === 0 ? <FacaLogin /> : ""}

      <Header texto={produto.nome} />
      <div className="container-produto">
        <div className="foto-section">
          <img className="foto-produto" src={produto.imagem} alt="" />
        </div>

        <div className="informacoes">
          <div className="nome-preco-parcelas">
            <h1 className="nome">{produto.nome}</h1>
            <div className="preco-parcelas">
              <p
                className="preco"
                style={
                  produto.desconto === 0
                    ? {}
                    : {
                        background: "crimson",
                        padding: "1vw",
                        color: "white",
                        borderRadius: "1vw",
                        textDecoration: " 0.2vh underline #161616",
                      }
                }
              >
                R${" "}
                {(
                  produto.preco -
                  produto.preco * (produto.desconto / 100)
                ).toFixed(2)}
              </p>
              <p className="parcelas">
                em até 3x{" "}
                {(
                  (produto.preco - produto.preco * (produto.desconto / 100)) /
                  3
                ).toFixed(2)}{" "}
                <s /> s/ juros
              </p>
            </div>
          </div>
          <div className="selecao-tamnho">
            <h4 className="tamanho">Escolha o tamanho</h4>
            <select defaultValue={"p"} class="tamanho-input" id="tamanho">
              {produto.quantidade_p !== 0 ? (
                <option value="p" selected="selected">
                  P
                </option>
              ) : (
                ""
              )}
              {produto.quantidade_m !== 0 ? (
                <option value="m" selected="selected">
                  M
                </option>
              ) : (
                ""
              )}
              {produto.quantidade_g !== 0 ? (
                <option value="g" selected="selected">
                  G
                </option>
              ) : (
                ""
              )}
            </select>
          </div>

          <div className="section-botao">
            <button
              className="adicionar-sacola"
              onClick={() => {
                const select = document.getElementById("tamanho");
                const tamanho = select.value;
                handleAdicaoListaCarrinnho(produto.id, tamanho);
              }}
            >
              Adicionar à Sacola
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Produto;
