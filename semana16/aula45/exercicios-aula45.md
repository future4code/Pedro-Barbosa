CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

a) No id é possível criar itens de string de no máximo 255 caracteres, e tem uma chave única de identificação.
No name também é possível criar itens de string de no máximo 255 caracteres, que não pode ser nula.
No birth_date é possível criar um item com uma data não nulo.
No gênero torna possível criar um item de string de no máximo 6 caracteres, uma vez que as opções
são somente male e female

b)
SHOW DATABASES
SHOW TABLES
O primeiro é sinônimo de SHOW SCHEMAS, e faz uma relação dos SCHEMAS de uma database
O segundo faz uma relação das tabelas de um schema
c) 
DESCRIBE Actor;
Descreve os campos da tabela, e os atributos

Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
)

a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
)

b)

 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Cleo Pires",
	40000,
  "1982-10-02", 
  "female"
)

Diz ser uma entrada duplicada. Isso porque toda primary key é única.

c)

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

Não foram estabelecidos todos os valores para que fossem adicionadas as informações à tabela.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

O campo nome não tem um valor padrão, e como não foi estabelecido um valor e não poder ser nulo, é necessário
inserir um valor

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

e)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

Tipo data deve ser atribuído no padrão através de aspas.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Cleo Pires",
  400000,
  "1982-10-02", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marcos Pasquim",
  100000,
  "1969-06-14", 
  "male"
);

a)

SELECT * from Actor WHERE gender = "female"

b)

SELECT salary from Actor WHERE name = "Tony Ramos"

c)

SELECT * from Actor WHERE gender = "lalala";

d)

SELECT id, name, salary from Actor WHERE salary < 500000 

e) 

SELECT id, nome from Actor WHERE id = "002"
Não existe coluna chamada nome, e sim name.
SELECT id, name from Actor WHERE id = "002"

Exercício 4

a) Está selecionando todos elementos da tabela actor(SELECT * from Actor) que(WHERE) tem o nome igual a(LIKE), que começa com (A%, J%) A
ou(OR) J, e(AND) o salário é maior que R$ 300.000 (salary > 300000)

b)
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

c)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%");

d)
SELECT 
    *
FROM
    Actor
WHERE
    (name LIKE '%G%' OR name LIKE '%g%'
        OR name LIKE '%A%'
        OR name LIKE '%a%')
        AND salary BETWEEN 350000 AND 900000;


Exercício 5

a)
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating TINYINT NOT NULL
);

b)  

INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
 7
);

c)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
 10
);

d)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
 8
);

e)
INSERT INTO Movie (id, name, synopsis, release_date, rating)
VALUES(
  "004", 
  "Tropa de Elite",
 "Pressionado pela esposa a sair do batalhão, Rodrigo Nascimento procura um substituto. Ao mesmo tempo, dois amigos se candidatam ao curso de formação da Tropa de Elite.",
  "2007-10-05", 
 10
);

Exercício 6
a)
SELECT id, name, rating FROM Movie WHERE id = "002";
b)
SELECT * FROM Movie WHERE name = "Tropa de Elite"
c) 
SELECT id, name, synopsis FROM Movie WHERE rating >= 7

Exercício 7
a)
SELECT * from Movie WHERE name LIKE "%vida%";
b)
SELECT * from Movie WHERE name LIKE "%vida%" or synopsis LIKE "%vida%";
c)
SELECT * from Movie WHERE release_date < "2021-07-19"
d)
SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (name LIKE "%t%" OR
      synopsis LIKE "%t%") AND rating > 7;
