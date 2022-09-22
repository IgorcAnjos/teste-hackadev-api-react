import { React } from "react";
import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";

import "./AdmCatalogo.css";

const AdmCatalogo = ({ id, imagem, nome, preco, qtdM, qtdP, qtdG }) => {
  return (
    <main className="main-catalogo__adm">
      <section className="produto">
        <div className="imagem">
          <img src={imagem} alt="Imagem Terno" className="img-produto" />
        </div>
        <div className="descricao">
          <p>Id: {id}</p>
          <p>{nome}</p>
          <p>R$ {preco}</p>
          <p>Qtd. P: {qtdP}</p>
          <p>Qtd. M: {qtdM}</p>
          <p>Qtd. G:{qtdG}</p>
        </div>
      </section>
      <div className="alterar">
        <Link to={`/produtos/atualizar/${id}`}>
          <button className="botao-alterar">
            <FiEdit className="icone-alterar" />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AdmCatalogo;
