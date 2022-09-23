import { client } from "./config.mjs";

const sendMessageWhatsappTwilio = async (mensagem) => {
  client.messages
    .create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+556281986987",
      body: `${mensagem}`,
    })
    .then((response) => console.log(response.body))
    .catch((err) => console.log(err.message));
};

export const mensagemFinalizarCompra = (produtos, idPedido) => {
  let precoTotal = 0;
  produtos.map((produto) => {
    precoTotal += Number(produto.precoSubtotal);
  });
  const mensagem = `Olá,
  Seu pedido foi gerado:
  ID: ${idPedido}, 
  Total: ${precoTotal}
  Confirme agora o Pagamento: 
  https://kingsman-apitest.netlify.app/usuario/pedidos
  `;

  sendMessageWhatsappTwilio(mensagem);
};
