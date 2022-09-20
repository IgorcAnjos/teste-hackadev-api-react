import React from "react";

import Header from "../../Header/Header";

import "./Cadastro.css";

const Cadastro = () => {
  return (
    <main class="cadastro-main">
      <Header texto="Cadastro" />
      <section class="cadastro-section">
        <form action="" id="form-cadastro">
          <div className="input-checkout">
            <label className="label-texto" htmlFor="nome-usuario">
              Nome completo
            </label>
            <input
              className="input"
              type="text"
              name="nome-usuario"
              id="nome-usuario"
              size="50"
              maxLength="50"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="email-usuario">
              E-mail
            </label>
            <input
              className="input"
              type="email"
              nome="email-usuario"
              id="email-usuario"
              size="40"
              maxlength="40"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="senha-usuario">
              Senha
            </label>
            <input
              className="input"
              type="password"
              nome="senha-usuario"
              id="senha-usuario"
              size="20"
              maxlength="20"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-pais">
              País
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-pais"
              id="endereco-pais"
              size="30"
              maxlength="30"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-cep">
              CEP
            </label>
            <input
              className="input"
              type="tel"
              nome="endereco-cep"
              id="endereco-cep"
              maxlength="8"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco">
              Endereço
            </label>
            <input
              className="input"
              type="text"
              nome="endereco"
              id="endereco"
              size="50"
              maxlength="50"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-cidade">
              Cidade
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-cidade"
              id="endereco-cidade"
              size="30"
              maxlength="30"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-bairro">
              Bairro
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-bairro"
              id="endereco-bairro"
              size="30"
              maxlength="30"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-estado">
              Estado
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-estado"
              id="endereco-estado"
              size="2"
              maxlength="2"
              required
            />
          </div>
          <div className="input-checkout">
            <label className="label-texto" htmlFor="endereco-complemento">
              Complemento
            </label>
            <input
              className="input"
              type="text"
              nome="endereco-complemento"
              id="endereco-complemento"
              size="50"
              maxlength="50"
              required
            />
          </div>
          <div class="enviar-cadastro">
            <a href="../../home.html">
              <button class="enviar-button" onClick={() => {}}>
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
