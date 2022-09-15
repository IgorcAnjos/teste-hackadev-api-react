import React from "react";
import { Carrinho } from ".";

const CarrinhoProvider = ({ children }) => {
  return <Carrinho.Provider>{children}</Carrinho.Provider>;
};

export default CarrinhoProvider;
