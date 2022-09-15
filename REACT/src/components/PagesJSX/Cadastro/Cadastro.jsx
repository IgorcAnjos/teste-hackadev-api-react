import React from "react";

import InputCheckout from "../../InputCheckout/InputCheckout";
import Header from "../../Header/Header";

import "./Cadastro.css";

const Cadastro = ({ handleLoginAction }) => {
  return (
    <main class="cadastro-main">
      <Header texto="Cadastro" />
      <section class="cadastro-section">
        <form action="" id="form-cadastro">
          <InputCheckout
            texto="Nome completo"
            type="text"
            nome="nome-usuario"
            id="nome-usuario"
            size="50"
            maxlength="50"
          />
          <InputCheckout
            texto="E-mail"
            type="email"
            nome="email-usuario"
            id="email-usuario"
            size="40"
            maxlength="40"
          />
          <InputCheckout
            texto="Senha"
            type="password"
            nome="senha-usuario"
            id="senha-usuario"
            size="20"
            maxlength="20"
          />
          <InputCheckout
            texto="País"
            type="text"
            nome="endereco-pais"
            id="endereco-pais"
            size="30"
            maxlength="30"
          />
          <InputCheckout
            texto="CEP"
            type="tel"
            nome="endereco-cep"
            id="endereco-cep"
            maxlength="8"
          />
          <InputCheckout
            texto="Endereço"
            type="text"
            nome="endereco"
            id="endereco"
            size="50"
            maxlength="50"
          />
          <InputCheckout
            texto="Cidade"
            type="text"
            nome="endereco-cidade"
            id="endereco-cidade"
            size="30"
            maxlength="30"
          />
          <InputCheckout
            texto="Bairro"
            type="text"
            nome="endereco-bairro"
            id="endereco-bairro"
            size="30"
            maxlength="30"
          />
          <InputCheckout
            texto="Estado"
            type="text"
            nome="endereco-estado"
            id="endereco-estado"
            size="2"
            maxlength="2"
          />
          <InputCheckout
            texto="Complemento"
            type="text"
            nome="endereco-complemento"
            id="endereco-complemento"
            size="50"
            maxlength="50"
          />
          <div class="enviar-cadastro">
            <a href="../../home.html">
              <button
                class="enviar-button"
                onClick={() => {
                  handleLoginAction();
                }}
              >
                Enviar
              </button>
            </a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Cadastro;
