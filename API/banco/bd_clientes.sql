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

