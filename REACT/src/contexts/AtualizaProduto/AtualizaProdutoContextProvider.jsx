import React, { useState } from "react";
import { AtualizaProdutoContext } from ".";

const AtualizaProdutoContextProvider = ({ children }) => {
  const [idProduto, setIdProduto] = useState(1);
  const [nomeProduto, setNomeProduto] = useState("blabla");
  const [precoProduto, setprecoProduto] = useState(50000);
  const [descricaoProduto, setDescricaoProduto] = useState("isso Ai");
  const [quantidadePProduto, setQuantidadePProduto] = useState(0);
  const [quantidadeMProduto, setQuantidadeMProduto] = useState(0);
  const [quantidadeGProduto, setQuantidadeGProduto] = useState(0);
  const [imagemProduto, setImagemProduto] = useState("link");
  const [descontoProduto, setDescontoProduto] = useState(50);

  const bodyUpdate = {
    imagem: imagemProduto,
    nome: nomeProduto,
    descricao: descricaoProduto,
    preco: precoProduto,
    quantidadeP: quantidadePProduto,
    quantidadeM: quantidadeMProduto,
    quantidadeG: quantidadeGProduto,
    desconto: descontoProduto,
  };

  return (
    <AtualizaProdutoContext.Provider
      value={{
        idProduto,
        bodyUpdate,
        setNomeProduto,
        setprecoProduto,
        setQuantidadePProduto,
        setQuantidadeMProduto,
        setQuantidadeGProduto,
        setImagemProduto,
      }}
    >
      {children}
    </AtualizaProdutoContext.Provider>
  );
};

export default AtualizaProdutoContextProvider;
