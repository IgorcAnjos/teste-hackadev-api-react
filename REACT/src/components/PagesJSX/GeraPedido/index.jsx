import useHandleFetchInsertPedido from "../../../Utils/HandleNewPedido";

const GeraPedido = () => {
  const idPedido = useHandleFetchInsertPedido();
  console.log(idPedido);
  return <div>Gerando seu pedido</div>;
};

export default GeraPedido;
