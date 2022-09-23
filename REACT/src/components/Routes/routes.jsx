import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import Home from "../PagesJSX/Home/Home";
import Cadastro from "../PagesJSX/Cadastro/Cadastro";
import Produto from "../PagesJSX/Produto/Produto";
import Checkout from "../PagesJSX/Checkout/Checkout";
import Busca from "../PagesJSX/Busca/Busca";
import Login from "../PagesJSX/Login/Login";
import Duvidas from "../PagesJSX/DuvidasESac/Duvidas";
import InfoUsuariosProvider from "../../contexts/Clientes/ClientesProvider";
import Usuario from "../PagesJSX/Usuario";
import Pedidos from "../PagesJSX/Pedidos";
import ProdutoPorPedido from "../PagesJSX/PedidosProdutos";
import GeraPedido from "../PagesJSX/GeraPedido";
import GeraPedidoProvider from "../../contexts/GeraPedido/GeraPedidoProvider";
import AdmProdutos from "../PagesJSX/ADMProduto";
import CadastroContextProvider from "../../contexts/CadastroContext/CadastroContextProvider";
import GeraCadastro from "../PagesJSX/GeraCadastro";
import AdmEditUsers from "../PagesJSX/ADMUsuarios";

const RouterPages = () => {
  const isAutenticado = () => {
    if (localStorage.login === undefined) {
      return false;
    } else {
      const autenticado =
        JSON.parse(localStorage.login).id &&
        JSON.parse(localStorage.login).token
          ? true
          : false;
      return autenticado;
    }
  };

  const AuthRoute = ({ children }) => {
    console.log("Auth");
    return isAutenticado() ? <>{children}</> : <Navigate to="/login" replace />;
  };

  const NotAuthRoute = ({ children }) => {
    return !isAutenticado() ? <>{children}</> : <Navigate to="/" replace />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isAutenticado={isAutenticado} />} />
        <Route
          path="/login"
          element={
            <NotAuthRoute>
              <Login />
            </NotAuthRoute>
          }
        />
        <Route
          path="/cadastro"
          element={
            <CadastroContextProvider>
              <NotAuthRoute>
                <Cadastro />
              </NotAuthRoute>
            </CadastroContextProvider>
          }
        />
        <Route
          path="/cadastro/geracadastro"
          element={
            <CadastroContextProvider>
              <NotAuthRoute>
                <GeraCadastro />
              </NotAuthRoute>
            </CadastroContextProvider>
          }
        />
        <Route
          path="/checkout"
          element={
            // <InfoUsuariosProvider>
            <AuthRoute>
              <Checkout />
            </AuthRoute>
            // </InfoUsuariosProvider>
          }
        />
        <Route path="/busca" element={<Busca />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route
          path="/produto/:id"
          element={<Produto isAutenticado={isAutenticado} />}
        />
        <Route
          path="/usuario"
          element={
            <AuthRoute>
              <Usuario />
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/pedidos"
          element={
            <AuthRoute>
              <InfoUsuariosProvider>
                <Pedidos />
              </InfoUsuariosProvider>
            </AuthRoute>
          }
        />
        <Route
          path="/pedidos/Detalhes/:id"
          element={
            <InfoUsuariosProvider>
              <AuthRoute>
                <ProdutoPorPedido />
              </AuthRoute>
            </InfoUsuariosProvider>
          }
        />
        <Route
          path="/checkout/gerapedido/:id"
          element={
            <GeraPedidoProvider>
              <AuthRoute>
                <GeraPedido />
              </AuthRoute>
            </GeraPedidoProvider>
          }
        />
        <Route
          path="/usuario/adm/produtos"
          element={
            <AuthRoute>
              <AdmProdutos />
            </AuthRoute>
          }
        />
        <Route
          path="/usuario/adm/usuariosEdit"
          element={
            <AuthRoute>
              <AdmEditUsers />
            </AuthRoute>
          }
        />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
