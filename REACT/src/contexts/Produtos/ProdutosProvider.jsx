import React from "react";
import { Produtos } from ".";

const ProdutosProvider = ({ children }) => {
  return <Produtos.Provider>{children}</Produtos.Provider>;
};

export default ProdutosProvider;
