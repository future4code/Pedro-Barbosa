## Exercício 1

- a) Sim. Tecnicamente isso aumenta a quantidade de combinações possíveis.
- b) Feito.

## Exercício 2

- a) O código está primeiramente separando o nome da tabela em uma variável;
em seguida, está estabelecendo uma conexão com o banco de dados, e, em seguida,
criando o usuário inserindo as informações necessárias na tabela(esta representada pela variável em que foi salva.)
- b)
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);
- c) Feito.

## Exercício 3

- a) Pra especificar o tipo que está sendo recebido. Caso contrário, o process.env só envia tipo string | undefined, e a chave secreta só sabe trabalhar com o tipo string.

- b) Feito.

## Exercício 4

- a) Feito.
- b) Feito.
- c) Feito.

## Exercício 5

- a) Feito.

## Exercício 6

- a) Feito.
- b) Feito.

## Exercício 7
- a) Se certifica de que se pode receber qualquer informação. Porque de que tipo será o token, fica a critério do desenvolvedor, uma vez que o verify só faz a verificação do conteúdo; dessa forma você se certifica que conseguirá processar qualquer tipo inserido no token.

- b) Feito.

## Exercício 8

- a) Feito.
- b) Feito.

