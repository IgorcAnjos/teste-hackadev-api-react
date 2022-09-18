import { React, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";
import Duvidas from "../PagesJSX/DuvidasESac/Duvidas";

const RouterPages = () => {
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
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login handleLoginAction={handleLoginAction} />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro handleLoginAction={handleLoginAction} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/busca" element={<Busca />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/produto/:id" element={<Produto login={login} />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
