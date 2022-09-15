import React from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import InputCheckout from "../../InputCheckout/InputCheckout";

import "./Login.css";

const Login = ({ handleLoginAction }) => {
  return (
    <main className="login-main">
      <Header texto="Login" />
      <section className="login-section">
        <form className="login-form" action="">
          <InputCheckout
            texto="E-mail"
            type="email"
            nome="email-usuario"
            id="email-usuario"
            size="50"
            maxlength="50"
          />
          <InputCheckout
            texto="Senha"
            type="password"
            nome="senha-usuario"
            id="senha-usuario"
            size="20"
            maxLength="20"
          />
          <Link to="/" className="login-link">
            Esqueceu sua senha?
          </Link>

          <Link to="/" className="botao-entrar">
            <button
              className="login-btn"
              onClick={() => {
                handleLoginAction();
              }}
            >
              Entrar
            </button>
          </Link>
        </form>

        <div className="redirect-cadastro">
          <p id="ou">-ou-</p>
          <Link to="/cadastro" className="login-link">
            Ainda não é cadastrado?
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
