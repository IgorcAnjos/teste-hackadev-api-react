import { React, useContext, useState } from "react";
import { BiGridVertical, BiDotsVertical } from "react-icons/bi";
import { Produtos } from "../../contexts/Produtos";

import ProdutoCatalogo from "../ProdutoCatalogo/ProdutoCatalogo";

import "./Catalogo.css";

const Catalogo = () => {
  const { listaDeProdutos } = useContext(Produtos);

  const produtos =
    listaDeProdutos === true
      ? true
      : listaDeProdutos.length > 1
      ? listaDeProdutos
      : false;

  const [colunas, setColunas] = useState("coluna2");
  return (
    <section className="catalogo">
      <div className="titulo-visualisa-colunas">
        <h1 className="titulo-catalogo">Catálogo</h1>
        <div className="visualiza-colunas">
          {colunas === "coluna2" ? (
            <BiDotsVertical
              className="coluna"
              onClick={() => {
                setColunas("coluna1");
              }}
            />
          ) : (
            <BiGridVertical
              className="coluna"
              onClick={() => {
                setColunas("coluna2");
              }}
            />
          )}
        </div>
      </div>
      <section className="flex-container">
        {produtos !== true ? (
          produtos.map((item) => (
            <div key={item.id}>
              <ProdutoCatalogo
                id={item.id}
                imagem={item.imagem}
                nome={item.nome}
                preco={item.preco}
                desconto={item.desconto}
                colunas={colunas}
              />
            </div>
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </section>
    </section>
  );
};
export default Catalogo;
