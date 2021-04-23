/*
Exercícios de interpretação de código
1 -
Ele está somando os números de 1 até 4 na variável valor.
O resultado será 10 (0+1+2+3+4 = 10).

2 - 
a. Todos números da array maiores que 18.
b. Sim. Podemos utilizar o método .entries para imprimir a array junto
com o índice, ou somente o índice com .keys na variavel da array

Desafio

O primeiro while faz com que, ao inserir o número 4, limite as repetições
de todo o código em quatro vezes (quantidadeAtual indo de 0 a 3).
Em seguida, é declarada a linha como uma string.
Por fim, temos o loop que adiciona uma string 0 em uma linha a cada repetição do código.
Sendo assim, no fim, teremos:
0
00
000
0000

*/

//Exercícios de escrita de código
//3 - 

let arrayOriginal = [2, 7, 9, 3, 45, 34, 20]

// a.
for (let numeros of arrayOriginal) {
    console.log(numeros)
}
console.log("")

// b.
for (let numeros of arrayOriginal) {
    console.log(numeros / 10)
}
console.log("")

// c.
let novaArray = []
for (let numeros of arrayOriginal) {
    if (numeros % 2 === 0) {
        novaArray.push(numeros)
    }
}
console.log(novaArray)

// d.
for (let [indice, numeros] of arrayOriginal.entries()) {
    console.log(`O elemento do índex ${indice} é: ${numeros}`)
}

// e.
let maiorNumero = Number.NEGATIVE_INFINITY
let menorNumero = Infinity

for (let numeros of arrayOriginal) {
    if (numeros > maiorNumero) {
        maiorNumero = numeros
    }  
    if (numeros < menorNumero) {
        menorNumero = numeros
    }
}
console.log (`O maior número é ${maiorNumero} e o menor é ${menorNumero} `)

// Desafios
// 1
let numerosTentativa = []
let numeroTentado

console.log("Vamos jogar!")
let numeroInserido = Number(prompt("Insira um número."))

while (numeroInserido !== numeroTentado) {
    numeroTentado = Number(prompt("Chute um número!"))
    numerosTentativa.push(numeroTentado)
    console.log(`O número chutado foi: ${numeroTentado}.`)
    if (numeroTentado > numeroInserido) {
        console.log("ERRRRRRROOOOOUUUU! O número é menor!")
    }
    if (numeroTentado < numeroInserido) {
        console.log("ERRRRRRROOOOOUUUU! O número é maior!")
    }
}
console.log(`Acertou!! 
O número de tentativas foi ${numerosTentativa.length}.`)


//2

let numerosTentativa = []
let numeroTentado
let numeroInserido = Math.floor((Math.random() * 100) + 1);

console.log("Vamos jogar!")

while (numeroInserido !== numeroTentado) {
    numeroTentado = Number(prompt("Chute um número!"))
    numerosTentativa.push(numeroTentado)
    console.log(`O número chutado foi: ${numeroTentado}.`)
    if (numeroTentado > numeroInserido) {
        console.log("ERRRRRRROOOOOUUUU! O número é menor!")
    }
    if (numeroTentado < numeroInserido) {
        console.log("ERRRRRRROOOOOUUUU! O número é maior!")
    }
}
console.log(`Acertou!! 
O número de tentativas foi ${numerosTentativa.length}.`)





