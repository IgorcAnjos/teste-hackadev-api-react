import { useState } from "react";
import { InfoUsuarios } from ".";
import useHandleFetchPedidosCliente from "../../Utils/HandleFetchPedidosCliente";
import HandlePedidos from "../../Utils/HandleNewPedido";

const InfoUsuariosProvider = ({ children }) => {
  const [listaCarrinho, setListaCarrinho] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [idFormaDePagamento, setIdFormaDePagamento] = useState(null);

  const pedidosUsuario = useHandleFetchPedidosCliente();

  const calcTotal = () => {
    let total = 0;
    if (listaCarrinho !== null) {
      listaCarrinho.map(
        (produto) => (total += produto.quantidade * produto.preco)
      );
    }
    return total;
  };

  const precoTotal = calcTotal();

  const pedidos =
    listaCarrinho !== null && usuario !== null && idFormaDePagamento !== null
      ? {
          idUsuario: usuario.id,
          precoTotal,
          idFormaDePagamento: idFormaDePagamento,
        }
      : null;

  // console.log(`pedidos: ${pedidos}`);

  const ListaDeProdutosPedidos =
    listaCarrinho !== null
      ? listaCarrinho.map((item) => {
          const idProduto = Number(
            String(item.id).substring(0, item.id.length - 1)
          );
          const precoSubtotal = Number(item.preco) * Number(item.quantidade);
          const quantidade = Number(item.quantidade);
          const tamanho = String(item.id).slice(-1);
          return { idProduto, precoSubtotal, quantidade, tamanho };
        })
      : null;
  // console.log(`listaProduto: ${ListaDeProdutosPedidos}`);

  const efeturarPedidos = () => {
    return HandlePedidos({
      dataEst1: pedidos,
      dataEst2: ListaDeProdutosPedidos,
    });
  };
  return (
    <InfoUsuarios.Provider
      value={{
        setIdFormaDePagamento,
        setUsuario,
        setListaCarrinho,
        efeturarPedidos,
        pedidosUsuario,
      }}
    >
      {" "}
      {children}
    </InfoUsuarios.Provider>
  );
};

export default InfoUsuariosProvider;
