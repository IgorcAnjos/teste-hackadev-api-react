import React from "react";
import { Produtos } from ".";
import useFetch from "../../Hooks/useFetch";

const ProdutosProvider = ({ children }) => {
  const url = "http://localhost:80/produtos/40";
  const method = "get";
  const usuarios = useFetch(url, method);
  console.log(usuarios);
  return <Produtos.Provider value={{}}>{children}</Produtos.Provider>;
};

export default ProdutosProvider;
