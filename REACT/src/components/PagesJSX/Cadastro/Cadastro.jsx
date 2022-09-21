// import { useState, useContext } from "react";

import Header from "../../Header/Header";

import "./Cadastro.css";

const Cadastro = () => {
  // const [cadastroNomeCompleto, setCadastroNomeCompleto] = useState(null);
  // const [cadastroEmail, setCadastroEmail] = useState(null);
  // const [cadastroSenha, setCadastroSenha] = useState(null);
  // const [cadastroPais, setCadastroPais] = useState(null);
  // const [cadastroCep, setCadastroCep] = useState(null);
  // const [cadastroEndereco, setCadastroEndereco] = useState(null);
  // const [cadastroCidade, setCadastroCidade] = useState(null);
  // const [cadastroBairro, setCadastroBairro] = useState(null);
  // const [cadastroEstado, setCadastroEstado] = useState(null);
  // const [cadastroComplemento, setCadastroComplemento] = useState(null);
  return (
    <main className="cadastro-main">
      <Header texto="Cadastro" />
      <section className="cadastro-section">
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
              // onBlur={(e) => setCadastroNomeCompleto(e.target.value)}
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
              maxLength="40"
              required
              // onBlur={(e) => setCadastroEmail(e.target.value)}
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
              maxLength="20"
              required
              // onBlur={(e) => setCadastroSenha(e.target.value)}
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
              maxLength="30"
              required
              // onBlur={(e) => setCadastroPais(e.target.value)}
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
              maxLength="8"
              required
              // onBlur={(e) => setCadastroCep(e.target.value)}
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
              maxLength="50"
              required
              // onBlur={(e) => setCadastroEndereco(e.target.value)}
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
              maxLength="30"
              required
              // onBlur={(e) => setCadastroCidade(e.target.value)}
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
              maxLength="30"
              required
              // onBlur={(e) => setCadastroBairro(e.target.value)}
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
              maxLength="2"
              required
              // onBlur={(e) => setCadastroEstado(e.target.value)}
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
              maxLength="50"
              required
              // onBlur={(e) => setCadastroComplemento(e.target.value)}
            />
          </div>
          <div className="enviar-cadastro">
            <a href="../../home.html">
              <button className="enviar-button" onClick={() => {}}>
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
