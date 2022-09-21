import React from "react";
import { Link } from "react-router-dom";

import { GiQueenCrown } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import "./Usuario.css";

const Usuario = () => {
  const email = JSON.parse(localStorage.login).email;
  return (
    <main className="main">
      <section className="user-main">
        <Header texto="Usuario" />
        <section className="perfil">
          <GiQueenCrown className="icone-coroa" />
          <h2 className="nome-perfil">{email}</h2>
        </section>
        <section className="principal">
          <div className="dados-user pessoais">
            <h3>Dados Pessoais</h3>
            <Link to="#">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
          <div className="dados-user endereco">
            <h3>Endereço</h3>
            <Link to="#">
              <FiEdit className="icone icone-edit" />
            </Link>
          </div>
          <div className="dados-user pedidos">
            <h3>Pedidos</h3>
            <Link to="/usuario/pedidos">
              <GiMagnifyingGlass className="icone icone-lupa" />
            </Link>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Usuario;
