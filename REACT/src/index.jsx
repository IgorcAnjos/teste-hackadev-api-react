import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./contexts/Auth/AuthProvider";
import ProdutosProvider from "./contexts/Produtos/ProdutosProvider";
import CarrinhoProvider from "./contexts/Carrinho/CarrinhoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProdutosProvider>
        <CarrinhoProvider>
          <App />
        </CarrinhoProvider>
      </ProdutosProvider>
    </AuthProvider>
  </React.StrictMode>
);
