import { bancoDeDados } from "../infra/index.mjs";

export const getUsuarios = () => {
  return bancoDeDados.query("SELECT * FROM usuarios");
};

// Zerar banco de dados -------------------------------------------------

export const zeraDb = () => {
  bancoDeDados.none(
    `
    -------------------Apagar tabelas-----------------------
DROP TABLE IF EXISTS dados_usuarios;
DROP TABLE IF EXISTS compras;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS status_pedidos;
DROP TABLE IF EXISTS forma_pagamento;
DROP TABLE IF EXISTS usuarios;

-------------------Criar tabelas------------------------
CREATE TABLE usuarios (
    id    SERIAL      PRIMARY KEY ,
    ativo BOOLEAN     NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(32) NOT NULL,
    data  DATE        NOT NULL,
    admin BOOLEAN 
);

CREATE TABLE dados_usuarios (
    id_usuario    INT REFERENCES usuarios(id),
    nome_completo VARCHAR(50)  NOT NULL,
    pais          VARCHAR(10)  NOT NULL,
    cep           VARCHAR(8)   NOT NULL,
    logradouro    VARCHAR(100) NOT NULL,
    cidade        VARCHAR(30)  NOT NULL,
    estado        VARCHAR(2)   NOT NULL,
    complemento   VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_usuario)
);

CREATE TABLE forma_pagamento (
    id             SERIAL     PRIMARY KEY,
    nome           VARCHAR(20)
);

CREATE TABLE status_pedidos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(15)
);

CREATE TABLE pedidos (
    id                  SERIAL      PRIMARY KEY,
    id_usuario          INT REFERENCES usuarios(id) NOT NULL,
    preco_total         MONEY       NOT NULL,
    id_forma_pagamento  INT REFERENCES forma_pagamento(id) NOT NULL,
    status              INT REFERENCES status_pedidos(id) NOT NULL,
    data                DATE        NOT NULL,
    hora                TIME        NOT NULL
);

CREATE TABLE compras (
    id             SERIAL     PRIMARY KEY,
    id_pedido      INT REFERENCES pedidos(id),
    id_produto     INT        NOT NULL,
    preco_subtotal MONEY      NOT NULL,
    quantidade     INT        NOT NULL,
    tamanho        VARCHAR(1) NOT NULL
    
);

-------------------Inserir dados------------------------

----------------- Forma Pagamento ----------------------

INSERT INTO forma_pagamento (nome)
VALUES
    ('Cartão de credito'),
    ('Boleto'),
    ('PIX');

---------------- Status do Pedidos ---------------------

INSERT INTO status_pedidos (nome)
VALUES
    ('Pendente'),
    ('Finalizado'),
    ('Cancelado');

-------------------- Usuário 1 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'joze@gmail.com', MD5('joze@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (1, 'joze da silva', 'Brasil', '71717171', 'R. joze Qd joze lote 1 ', 'joze dos campos', 'GO', 'joze');

-------------------- Usuário 2 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'joao@gmail.com', MD5('joao@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (2, 'joao da silva', 'Brasil', '72717171', 'R. joao Qd joao lote 1 ', 'joao dos campos', 'GO', 'joao');

-------------------- Usuário 3 -------------------------
INSERT INTO usuarios (ativo, email, senha, data)
VALUES
    (true, 'eric@gmail.com', MD5('eric@gmail.com'), now());

INSERT INTO dados_usuarios (id_usuario, nome_completo, pais, cep, logradouro, cidade, estado, complemento)
VALUES
    (3, 'Eric da silva', 'Brasil', '73717171', 'R. Eric Qd Eric lote 1 ', 'Eric dos campos', 'GO', 'Eric');

-------------------- Pedidos  ------------------------
INSERT INTO pedidos (id_usuario, preco_total, id_forma_pagamento, status, data, hora)
VALUES
    (1, 100, 1, 1, now(), CURRENT_TIME(0)),
    (2, 4000, 1, 1, now(),  CURRENT_TIME(0)),
    (3, 587, 3, 1,  now(), CURRENT_TIME(0)),
    (3, 600, 3, 1,  now(), CURRENT_TIME(0));

Insert INTO compras (id_pedido, id_produto, preco_subtotal, quantidade, tamanho)
VALUES
    (1, 10, 50, 1, 'g'),
    (1, 5, 50, 1, 'm'),
    (2, 10, 50, 20, 'g'),
    (2, 1, 2000, 2, 'g'),
    (2, 3, 500, 2, 'p'),
    (3, 5, 200, 4, 'm'),
    (3, 10, 200, 4, 'p'),
    (3, 7, 187, 1, 'g'),
    (4, 15, 600, 1, 'm');
    `
  );
};

// Referentes a Produtos  ------------------------------------------------

// Pegar todos os produtos do banco
export const getProdutos = () => {
  return bancoDeDados.query(
    `
    SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
FROM produtos as pd
JOIN categorias as ct
on pd.id_categoria = ct.id
    `
  );
};

// Pegar produtos por categoria
export const getProdutosByIdCategoria = (idCategoria) => {
  return bancoDeDados.query(
    `
  SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
  FROM produtos as pd
  JOIN categorias as ct
  on pd.id_categoria = ct.id
  WHERE ct.id = $1

    `,
    [idCategoria]
  );
};

// Pegar produtos por Id
export const getProdutosById = (idProduto) => {
  return bancoDeDados.query(
    `
  SELECT
    pd.id,
    pd.imagem,
    pd.nome,
    pd.descricao,
    pd.id_categoria,
    ct.nome "nome_categoria",
    pd.quantidade_p,
    pd.quantidade_m,
    pd.quantidade_g,
    pd.desconto 
  FROM produtos as pd
  JOIN categorias as ct
  on pd.id_categoria = ct.id
  WHERE pd.id = $1

    `,
    [idProduto]
  );
};

// Atualizar produtos do banco de dados
export const atualizarDadosDeProdutos = (newDadosProduto, idProduto) => {
  const {
    imagem,
    nome,
    descricao,
    preco,
    quantidadeP,
    quantidadeM,
    quantidadeG,
    desconto,
  } = newDadosProduto;
  const id = Number(idProduto);

  bancoDeDados.none(
    `
    UPDATE produtos
    SET
      imagem = $1,
      nome = $2,
      descricao = $3,
      preco = $4,
      quantidade_p = $5,
      quantidade_m = $6,
      quantidade_g = $7,
      desconto = $8
    WHERE id = $9
    `,
    [
      imagem,
      nome,
      descricao,
      preco,
      quantidadeP,
      quantidadeM,
      quantidadeG,
      desconto,
      id,
    ]
  );
};

// Inserir produtos no banco de dados

export const insertProduto = (newProduto) => {
  const {
    imagem,
    nome,
    descricao,
    idCategoria,
    preco,
    quantidadeP,
    quantidadeM,
    quantidadeG,
    desconto,
  } = newProduto;
  bancoDeDados.none(
    `
    INSERT INTO produtos (imagem, nome, descricao, id_categoria, preco, quantidade_p, quantidade_m, quantidade_g, desconto)
VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `,
    [
      imagem,
      nome,
      descricao,
      idCategoria,
      preco,
      quantidadeP,
      quantidadeM,
      quantidadeG,
      desconto,
    ]
  );
};

// subtrair quantidades de produtos com um tamanho selecionado
export const subtrairProduto = (quantidadeTamanhoTexto, sobra, idProduto) => {
  const query = `
  UPDATE produtos
    SET 
      ${quantidadeTamanhoTexto} = ${sobra}
    WHERE id = ${idProduto};
  `;
  bancoDeDados.none(query);
};

// Referentes a Cadastros e Dados Dadastrais  ---------------------------

// Cadastrar novos usuarios
export const insertCadastro = (newUsuario) => {
  const { email, senha } = newUsuario;
  bancoDeDados.none(
    "INSERT INTO usuarios (ativo, email, senha, data) VALUES (true, $1, MD5($2), now());",
    [email, senha]
  );
};

// Inativar usuarios cadastrados
export const inativarUsuarioById = (idUsuario) => {
  bancoDeDados.none("UPDATE usuarios SET ativo = false WHERE id = $1;", [
    idUsuario,
  ]);
};

// Efetuar login verificar dados e gerar token de acesso
export const makeLogin = (email) => {
  const query = `select id, email, senha, admin FROM usuarios WHERE email ILIKE '%${email}%'`;
  return bancoDeDados.one(query);
};

// Atualizar dados cadastrais
export const updateCadastro = (idUsuario, newDados) => {
  const { nomeCompleto, pais, cep, logradouro, cidade, estado, complemento } =
    newDados;

  const id = Number(idUsuario);
  bancoDeDados.none(
    "UPDATE dados_usuarios SET nome_completo = $1, pais = $2, cep = $3, logradouro = $4, cidade = $5, estado = $6, complemento = $7 WHERE id_usuario = $8;",
    [
      nomeCompleto,
      pais,
      cep,
      logradouro,
      cidade,
      estado,
      complemento,
      idUsuario,
    ]
  );
};

// Atualizar email e senha cadastradas
export const changeEmailPassword = (newDados, idUsuario) => {
  const { email, senha } = newDados;
  bancoDeDados.none(
    "UPDATE usuarios SET email = $1, senha = MD5($2) WHERE id = $3;",
    [email, senha, idUsuario]
  );
};

// Atualizar Usuario para ADM
export const changeAdmUsuario = (idUsuario) => {
  bancoDeDados.none("UPDATE usuarios SET admin = true WHERE id = $1;", [
    idUsuario,
  ]);
};

// Referentes a pedidos --------------------------------

// Pegar todos os pedidos existentes
export const getPedidos = () => {
  return bancoDeDados.query(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id`
  );
};

// Pegar todos os pedidos de um usuário

export const getPedidosByIdUsuario = (userId) => {
  return bancoDeDados.query(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id WHERE pd.id_usuario = $1;`,
    [userId]
  );
};

// Pegar dados informações de um pedido

export const getInfoPedidoById = (idPedido) => {
  return bancoDeDados.one(
    `SELECT pd.id as "idPedido", pd.id_usuario as "idUsuario", pd.preco_total as "precoTotal", sp.nome "status", fm.nome as "formaDePagamento", pd.data as "data", pd.hora as "hora" FROM pedidos as pd JOIN status_pedidos as sp ON pd.status = sp.id JOIN forma_pagamento as fm ON pd.id_forma_pagamento = fm.id WHERE pd.id = $1;`,
    [idPedido]
  );
};

// Pegar produtos de um pedido

export const getProdutosByPedidoId = (idPedido) => {
  return bancoDeDados.query(`SELECT * FROM compras WHERE id_pedido = $1;`, [
    idPedido,
  ]);
};

// Inserir um novo pedido
export const insertPedido = (newPedido) => {
  const { idUsuario, precoTotal, idFormaPagamento } = newPedido;
  bancoDeDados.none(
    "INSERT INTO pedidos (id_usuario, preco_total, id_forma_pagamento, status, data, hora) VALUES ($1, $2, $3, 1, now(), CURRENT_TIME(0));",
    [idUsuario, precoTotal, idFormaPagamento]
  );
};

// Inserir produtos de um determinado pedido

export const insertProdutosByPedidoId = (idPedido, produtos) => {
  let listQuery = [];
  produtos.map((produto) => {
    listQuery.push(
      `( ${idPedido}, ${produto.idProduto}, ${produto.precoSubtotal}, ${produto.quantidade}, '${produto.tamanho}')`
    );
  });
  const produtosTexto = listQuery.join(", ");
  bancoDeDados.none(
    `INSERT INTO compras (id_pedido, id_produto, preco_subtotal, quantidade, tamanho) VALUES ${produtosTexto}`
  );
};

// Alterar informações de um pedido
export const updatePedido = (idPedidoUpdate, updatePedido) => {
  const { status, idFormaPagamento } = updatePedido;
  bancoDeDados.none(
    "UPDATE pedidos SET status = $1, id_forma_pagamento = $2  WHERE id = $3;",
    [status, idFormaPagamento, idPedidoUpdate]
  );
};
