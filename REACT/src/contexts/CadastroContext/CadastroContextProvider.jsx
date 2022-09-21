import React from "react";
import { CadastroContext } from ".";
import useFetch from "../../Hooks/useFetch";

const CadastroContextProvider = ({ children }) => {
  // const [NomeComple, setNomeCompleto] = useState(null);
  // const [Email, setEmail] = useState(null);
  // const [Senha, setSenha] = useState(null);
  // const [Pais, setPais] = useState(null);
  // const [Cep, setCep] = useState(null);
  // const [Endereco, setEndereco] = useState(null);
  // const [Cidade, setCidade] = useState(null);
  // const [Bairro, setBairro] = useState(null);
  // const [Estado, setEstado] = useState(null);
  // const [Complemento, setComplemento] = useState(null);

  const objetoUsuariosCadastradosFetch = useFetch(
    `${process.env.REACT_APP_DEFURLAPI}usuarios`,
    "get"
  );

  const usuariosCadastrados =
    objetoUsuariosCadastradosFetch.dataResponse !== null
      ? objetoUsuariosCadastradosFetch.dataResponse
      : objetoUsuariosCadastradosFetch.error !== null
      ? false
      : true;

  console.log(usuariosCadastrados);
  return (
    <CadastroContext.Provider
      value={
        {
          // setBairro,
          // setCep,
          // setCidade,
          // setComplemento,
          // setEmail,
          // setEndereco,
          // setEstado,
          // setPais,
          // setSenha,
          // setNomeCompleto,
        }
      }
    >
      {children}
    </CadastroContext.Provider>
  );
};

export default CadastroContextProvider;
