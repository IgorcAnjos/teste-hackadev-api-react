import { GeraPedidoContext } from ".";
import useHandleFetchInsertPedido from "../../Utils/HandleNewPedido";

const GeraPedidoProvider = ({ children }) => {
  return (
    <GeraPedidoContext.Provider value={{}}>
      {children}
    </GeraPedidoContext.Provider>
  );
};

export default GeraPedidoProvider;
