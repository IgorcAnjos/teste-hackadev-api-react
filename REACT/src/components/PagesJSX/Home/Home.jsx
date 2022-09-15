import React from "react";

import Banner from "../../Banner/Banner";
import Catalogo from "../../Catalogo/Catalogo";
import FacaLogin from "../../FacaLogin/FacaLogin";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

import "./Home.css";

const Home = ({
  ListaDeProdutos,
  listaCarrinho,
  handleAdicaoListaCarrinnho,
  handleSubtracaoListaCarrinnho,
  handleExcluirListaCarrinnho,
  subTotal,
  handleSubTotal,
  setBuscar,
  login,
}) => {
  return (
    <div className="container">
      <Navbar
        listaCarrinho={listaCarrinho}
        handleAdicaoListaCarrinnho={handleAdicaoListaCarrinnho}
        handleSubtracaoListaCarrinnho={handleSubtracaoListaCarrinnho}
        handleExcluirListaCarrinnho={handleExcluirListaCarrinnho}
        subTotal={subTotal}
        handleSubTotal={handleSubTotal}
        ListaDeProdutos={ListaDeProdutos}
        setBuscar={setBuscar}
        login={login}
      />
      <div className="espacamento"></div>
      {login.length === 0 ? <FacaLogin /> : ""}
      <Banner />
      <Catalogo ListaDeProdutos={ListaDeProdutos} />
      <Footer />
    </div>
  );
};
export default Home;
