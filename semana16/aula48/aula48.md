## Exercício 1

* a) Chava usada para relacionar tabelas em um bando de dado.
* b) 
- INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "É bom, não é ruim, mas podia melhorar.",
    8,
		"002"
);

- INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Muy bom mesmo rapá",
    9,
		"003"
);

- INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Um filme não pode ser melhor",
    8,
		"004"
);

* c) É dito que não se pode adicionar uma fileira filha, isso porque não existe um item pai(primary key) para que ela possa ser relacionada à.

* d) ALTER TABLE Movie DROP COLUMN rating;

## Exercício 2

* a) A tabela primeiro torna possível ser criado um id para um ator, e outro para filmes, em seguida
declara que são chaves estrangeiras que serão recebidas com declaração dos id das tabelas Movie e Actor

* b)

- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "005"
)
- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "001"
)

- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"003",
    "006"
)

- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "006"
)

- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "003"
)

- INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "002"
)

* c) É dito que não se pode adicionar uma fileira filha, isso porque não existe um item pai(primary key) na tabela da qual é ligada para que ela possa ser relacionada à.

* d) É dito que não pode ser excluída ou atualizada uma tabela pai. Isso porque não podemos apagar
uma tabela pai relacionada com quaisquer tabelas filhas sem antes cortar essa relação.

# Exercício 3

* a) A query seleciona a tabela Movie, e em seguida faz uma ligação entre as fileiras que tem algo em
comum(usando o ON identificar a relação)
* b) SELECT Movie.name, Movie.id, Rating.rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
