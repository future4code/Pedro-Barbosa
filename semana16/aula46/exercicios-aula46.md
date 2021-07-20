## Exercício 1

* a) Apagará a coluna salary, com todas informações armazenadas
* b) Alterará o nome da coluna gender para sex
* c) Alterará o limite de caracteres da tabela gender para 255.
* d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2
* a)
UPDATE Actor 
SET name = "Xablau"
birth_date = "2012-12-12"
  WHERE id = "003";

* b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

 * c)
UPDATE Actor
SET name = "Jajajaja"
salary = 40000
birth_date = "2010-10-10"
gender = "male"
WHERE id = "005";

* d) Não houve erro, porém nada foi inserido. Isso se deu provavelmente porque
o banco de dados processou a informação com sucesso, e por não haver um espaço
em que pudesse ser guardado, ele não o guardou.

## Exercício 3

* a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

* b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

## Exercício 4

* a) SELECT MAX(salary) FROM Actor;

* b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

* c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

* d) SELECT SUM(salary) FROM Actor;

## Exercício 5

* a) Faz uma contagem de atributos de genêro da tabela Actor, agrupando
por gênero tal contagem.

* b) SELECT id, name FROM Actor ORDER BY name DESC;

* c) SELECT * FROM Actor ORDER BY salary;

* d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

* e) SELECT AVG(salary), gender FROM Actor GROUP BY gender; 

## Exercício 6

* a) ALTER TABLE Movie ADD playing_limit_date DATE;

* b) ALTER TABLE Movie CHANGE rating rating FLOAT;

* c) UPDATE Movie SET playing_limit_date = "2012-09-21" 
WHERE name = "Tropa de Elite"
UPDATE Movie SET playing_limit_date = "2021-09-21" 
WHERE name = "Doce de Mãe"

* d) DELETE FROM Movie WHERE id = "001"
UPDATE Movie SET synopsis = "Atualização" 
WHERE id = "001"
Não houve erro, porém nada foi inserido. Isso se deu provavelmente porque
o banco de dados processou a informação com sucesso, e por não haver um espaço
em que pudesse ser guardado, ele não o guardou.

## Exercício 7

* a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

* b) SELECT AVG(rating) FROM Movie;

* c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

* d) SELECT COUNT(*) FROM Movie WHERE playing_limit_date < CURDATE();

* e) SELECT MAX(rating) FROM Movie;

* f) SELECT MIN(rating) FROM Movie;

## Exercício 8

* a) SELECT * FROM Movie ORDER BY name;

* b) SELECT * FROM Movie ORDER BY name DESC LIMIT 5;

* c) SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

* d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;


