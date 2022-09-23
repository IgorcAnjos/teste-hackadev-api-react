import { React, useState } from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

import "./AdmCatalogo.css";
import ModalAtualizarProduto from "../ModalAtualizarProduto";

const AdmCatalogo = ({
  id,
  imagem,
  nome,
  preco,
  qtdM,
  qtdP,
  qtdG,
  descricao,
  desconto,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openCloseModal() {
    if (modalIsOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
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
      {/* <div className="alterar">
      <Link to={`/produtos/atualizar/${id}`} >
        <button className="botao-alterar">
          <FiEdit className="icone-alterar" />
        </button>
      </Link>
      </div> */}
      <div className="alterar">
        <button onClick={openCloseModal} className="botao-alterar">
          <FiEdit className="icone-alterar" />
        </button>
        <div>
          {/* <ModalAtualizarProduto
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            id={id}
            imagem={imagem}
            nome={nome}
            preco={preco}
            qtdM={qtdM}
            qtdP={qtdP}
            qtdG={qtdG}
            descricao={descricao}
            desconto={desconto}
          /> */}

          {/* <ReactModal isOpen={modalIsOpen} onRequestClose={openCloseModal}>
            <div className="modal-style">
              <button className="fechar" onClick={openCloseModal}>
                X
              </button>
              <div className="modal-topo">
                <h3>Id: {id}</h3>
                <img src={imagem} alt="Imagem Terno" className="img-produto" />
              </div>
              <div className="modal-form">
                <form action="">
                  <label>Nome</label>
                  <input type="text" name="Nome" placeholder={nome} />

                  <label>Preço</label>
                  <input type="text" name="Preço" placeholder={preco} />

                  <label>Quantidade P</label>
                  <input
                    type="text"
                    name="Quantidade Tamanho P"
                    placeholder={qtdP}
                  />

                  <label>Quantidade M</label>
                  <input
                    type="text"
                    name="Quantidade Tamanho M"
                    placeholder={qtdM}
                  />

                  <label>Quantidade G</label>
                  <input
                    type="text"
                    name="Quantidade Tamanho G"
                    placeholder={qtdG}
                  />

                  <label>Imagem</label>
                  <input
                    type="text"
                    name="Imagem"
                    placeholder="Digite o link da nova imagem"
                  />
                  <button className="enviar-produto">Enviar Alterações</button>
                </form>
              </div>
            </div>
          </ReactModal> */}
        </div>
      </div>
    </main>
  );
};

export default AdmCatalogo;
