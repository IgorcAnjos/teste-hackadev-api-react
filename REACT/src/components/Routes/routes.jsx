import { React, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";
import Duvidas from "../PagesJSX/DuvidasESac/Duvidas";

const getProdutos = require("../../ArrayBancoDeDados/ArrayBancoDeDados");

const RouterPages = () => {
  const ListaDeProdutos = getProdutos();

  // Funções pertinentes a lista de carrinho, adicionar subtrair e verificar todas estas ações
  const [listaCarrinho, setListaCarrinho] = useState(
    localStorage.listaCarrinho ? JSON.parse(localStorage.listaCarrinho) : []
  );

  const handleAdicaoListaCarrinnho = (id, tamanho) => {
    const idClick = `${id}${tamanho}`;

    const produtoExiste = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    const equivalencia = ListaDeProdutos.filter(
      (produto) => produto.id === parseInt(id)
    );

    const equivalenciaQuantidadeTamanho = `quantidade_${tamanho}`;

    if (produtoExiste.length > 0) {
      if (
        produtoExiste[0].quantidade <
        equivalencia[0][equivalenciaQuantidadeTamanho]
      ) {
        const indexProduto = listaCarrinho.indexOf(produtoExiste[0]);

        listaCarrinho[indexProduto].quantidade =
          produtoExiste[0].quantidade + 1;
        const novaListaCarrinho = [...listaCarrinho];

        setListaCarrinho(novaListaCarrinho);
      }
    } else {
      const findProduto = ListaDeProdutos.filter(
        (produto) => produto.id === id
      )[0];

      const novoProduto = {
        id: idClick,
        imagem: findProduto.imagem,
        nome: findProduto.nome,
        preco:
          findProduto.preco - findProduto.preco * (findProduto.desconto / 100),
        tamanho: tamanho,
        quantidade: 1,
      };

      const novaListaCarrinho = [...listaCarrinho, novoProduto];
      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleSubtracaoListaCarrinnho = (idClick) => {
    const findProduto = listaCarrinho.filter(
      (produto) => produto.id === idClick
    );

    if (findProduto[0].quantidade !== 1) {
      const indexProduto = listaCarrinho.indexOf(findProduto[0]);

      listaCarrinho[indexProduto].quantidade = findProduto[0].quantidade - 1;
      const novaListaCarrinho = [...listaCarrinho];

      setListaCarrinho(novaListaCarrinho);
    }
  };

  const handleExcluirListaCarrinnho = (idClick) => {
    const novaListaCarrinho = listaCarrinho.filter(
      (produto) => produto.id !== idClick
    );

    setListaCarrinho(novaListaCarrinho);
  };

  // Funções pertinentes ao subtotal da soma de todos os produtos no carrinho
  const [subTotal, setSubTotal] = useState(0);

  const handleSubTotal = (listaCarrinho) => {
    let soma = 0;

    listaCarrinho.map(
      (produto) => (soma += produto.preco * produto.quantidade)
    );
    setSubTotal(soma.toFixed(2));
  };

  useEffect(() => {
    handleSubTotal(listaCarrinho);
    localStorage.listaCarrinho = JSON.stringify(listaCarrinho);
  }, [listaCarrinho]);

  // Definindo  funções pertinentes da página de pesquisa
  const [ListaDeBusca, SetListaDeBusca] = useState([]);
  const [buscar, setBuscar] = useState("promocao");

  useEffect(() => {
    if (buscar !== "promocao") {
      const novaListaProdutos = ListaDeProdutos.filter((produto) =>
        produto.nome.toLowerCase().includes(buscar.toLowerCase())
      );
      SetListaDeBusca(novaListaProdutos);
    } else {
      const novaListaProdutos = ListaDeProdutos.filter(
        (produto) => produto.desconto > 0
      );
      SetListaDeBusca(novaListaProdutos);
    }
  }, [buscar, ListaDeProdutos]);

  // Funções pertinentes ao login
  const [login, setLogin] = useState(
    localStorage.login ? JSON.parse(localStorage.login) : []
  );

  const handleLoginAction = () => {
    setLogin([...login, { login: true }]);
    console.log(login);
  };

  useEffect(() => {
    localStorage.login = JSON.stringify(login);
  }, [login]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              ListaDeProdutos={ListaDeProdutos}
              listaCarrinho={listaCarrinho}
              handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
              handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
              handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
              subTotal={subTotal}
              handleSubTotal={handleSubTotal}
              setBuscar={setBuscar}
              login={login}
            />
          }
        />
        <Route
          path="/login"
          element={<Login handleLoginAction={handleLoginAction} />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro handleLoginAction={handleLoginAction} />}
        />
        <Route
          path="/checkout"
          element={<Checkout listaCarrinho={listaCarrinho} />}
        />
        <Route
          path="/busca"
          element={<Busca ListaDeBusca={ListaDeBusca} setBuscar={setBuscar} />}
        />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route
          path="/produto/:id"
          element={
            <Produto
              ListaDeProdutos={ListaDeProdutos}
              listaCarrinho={listaCarrinho}
              handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
              handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
              handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
              subTotal={subTotal}
              handleSubTotal={handleSubTotal}
              setBuscar={setBuscar}
              login={login}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterPages;
