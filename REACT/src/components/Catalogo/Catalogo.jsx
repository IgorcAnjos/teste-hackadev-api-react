import { React, useState } from "react";
import { BiGridVertical, BiDotsVertical } from "react-icons/bi";

import ProdutoCatalogo from "../ProdutoCatalogo/ProdutoCatalogo";

import "./Catalogo.css";

const Catalogo = ({ ListaDeProdutos }) => {
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
        {ListaDeProdutos.map((item) =>
          item.quantidade_p === 0 &&
          item.quantidade_m === 0 &&
          item.quantidade_g === 0 ? (
            ""
          ) : (
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
          )
        )}
      </section>
    </section>
  );
};
export default Catalogo;
