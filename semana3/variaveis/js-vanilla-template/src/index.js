/*Exercícios interpretação de código
1 - Será impresso
10

E então

10 5

Isso porque inicialmente foi atribuido 10 para ambas variáveis, e foi dado o comando
para que fosse impresso o B. Em seguida, a variável B foi redefinida pra 5,
e foi dado o comando para que A e B fossem impressas.

2 -  Será impresso
10 10 10

Isso porque A foi atribuído como 10, e B, 20. Em seguida, C foi atribuído como A, ou seja, 10.
Em seguida, B foi atribuído como C, logo, 10 novamente, e para finalizar, o A foi atribuído
como B, cujo valor foi alterado para 10 ao ser atribuído como C, logo, continuou a ser 10;
sendo assim, os valores impressos A, B e C são 10, 10 e 10.
*/

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

//O tipo undefined foi impresso porque a variável não está definida

nome = prompt("Qual é seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//A ambas foi atribuído o tipo string. O que significa que por padrão o prompt vai considerar
//o que foi inserido como texto.

console.log("Olá " + nome + ", você tem " + idade + " anos.")

const genero = prompt("Qual o seu gênero?")
const caviar = prompt("Você sabe o que é caviar?")
const livro = prompt("Qual o seu livro favorito?")
const cor = prompt("Qual a sua cor favorita?")
const pudim = prompt("Você gosta de pudim?")

console.log("1. Qual o seu gênero?")
console.log("Resposta: " + genero)

console.log("2. Você sabe o que é caviar?")
console.log("Resposta: " + caviar)

console.log("3. Qual o seu livro favorito?")
console.log("Resposta: " + livro)

console.log("4. Qual a sua cor favorita?")
console.log("Resposta: " + cor)

console.log("5. Você gosta de pudim?")
console.log("Resposta: " + pudim)

let comidasPreferidas = ["lasanha", "pizza", "hamburguer", "bolo", "filé a parmegiana"]

console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

comidasPreferidas[1] = prompt("Qual é sua comida favorita?")
console.log("")
console.log("Essas são minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
console.log("")

let perguntas = ["Você está bem?", "Você iria até a lua se pudesse?", "você tem cicatriz?"]
let respostas = [false, true, true]
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])




