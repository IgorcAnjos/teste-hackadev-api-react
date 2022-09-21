import useFetch from "../../Hooks/useFetch";

const useHandleFetchInsertPedido = () => {
  const urlAPI = process.env.REACT_APP_DEFURLAPI;

  const idFormaDePagamento = JSON.parse(localStorage.pagamento);
  const listaCarrinho = JSON.parse(localStorage.listaCarrinho);

  const usuario = JSON.parse(localStorage.login);

  const ProdutosPedidos = listaCarrinho.map((item) => {
    const idProduto = Number(String(item.id).substring(0, item.id.length - 1));
    const precoSubtotal = Number(item.preco) * Number(item.quantidade);
    const quantidade = Number(item.quantidade);
    const tamanho = String(item.id).slice(-1);
    return { idProduto, precoSubtotal, quantidade, tamanho };
  });

  const calcTotal = () => {
    let total = 0;
    listaCarrinho.map(
      (produto) => (total += produto.quantidade * produto.preco)
    );

    return total;
  };

  const precoTotal = calcTotal();

  const Pedido = {
    idUsuario: usuario.id,
    precoTotal,
    idFormaDePagamento: idFormaDePagamento,
  };
  console.log(Pedido);

  const objetoIdPedidoInserido = useFetch(`${urlAPI}pedidos/novo`, "post", {
    idUsuario: Pedido.idUsuario,
    precoTotal: Pedido.precoTotal,
    idFormaPagamento: Pedido.idFormaDePagamento,
  });
  console.log(objetoIdPedidoInserido);

  const ListaDePedidos =
    objetoIdPedidoInserido.dataResponse !== null
      ? objetoIdPedidoInserido.dataResponse
      : objetoIdPedidoInserido.error !== null
      ? false
      : true;

  return ListaDePedidos;
};

export default useHandleFetchInsertPedido;
