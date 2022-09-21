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
            <NotAuthRoute>
              <Cadastro />
            </NotAuthRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <InfoUsuariosProvider>
              <AuthRoute>
                <Checkout />
              </AuthRoute>
            </InfoUsuariosProvider>
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
            <InfoUsuariosProvider>
              <AuthRoute>
                <Pedidos />
              </AuthRoute>
            </InfoUsuariosProvider>
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

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterPages;
