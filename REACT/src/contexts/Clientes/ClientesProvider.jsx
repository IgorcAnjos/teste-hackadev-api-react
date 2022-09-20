import { InfoUsuarios } from ".";

const InfoUsuariosProvider = ({ children }) => {
  const usuarioLS = localStorage.login ? JSON.parse(localStorage.login) : [];
  const idUser = typeof usuarioLS === "object" ? usuarioLS.id : null;

  console.log(idUser);
  return <InfoUsuarios.Provider> {children}</InfoUsuarios.Provider>;
};

export default InfoUsuariosProvider;
