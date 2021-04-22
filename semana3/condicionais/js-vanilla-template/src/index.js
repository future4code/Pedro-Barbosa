/*
Exercícios de interpretação de código
1 -
Ele verifica se o número é par ou ímpar. Passou no teste é para números pares, não passou
para números ímpares.

2 -
a. Ele diz o preço de uma fruta ao ser digitada no prompt
b. O preço da fruta Maçã é R$ 2.25
c. O valor do default seria impresso com sendo dito como valor da Pêra, uma vez que o break 
serve para finalizar o programa no case especificado; caso contrário ele 
só continua rodando até o final.

3 - 
a. Recebendo um valor e convertendo para number.
b. Seria impresso "Esse número passou no teste". No caso do -10, não seria impresso nada.
c. Sim. A mensagem não recebeu nenhum valor porque está dentro de um escopo filho, enquanto
o log está fora do escopo, logo, haverá um erro dizendo que ela não foi definida.
*/

//  Exercícios de escrita de código

// 4 -

let idade = Number (prompt ("Qual a sua idade?"))

if (idade > 17) {
    console.log("Você pode dirigir!")
}
else {
    console.log("Você não pode dirigir!")
}

// 5 -

let periodo = (prompt("Insira o seu turno do curso! M para matutino, V para vespertino e N para noturno.")).toLowerCase()

if (periodo === "m") {
    console.log("Bom Dia!")
} else if (periodo === "v") {
    console.log("Boa tarde!")
} else if (periodo === "n") {
    console.log("Boa noite!")
} else {
    console.log("Não entendi.")
}

// 6 -

let periodo = (prompt("Insira o seu turno do curso! M para matutino, V para vespertino e N para noturno.")).toLowerCase()

switch (periodo) {
    case 'm':
        console.log("Bom Dia!")
        break
    case 'v':
        console.log("Boa tarde!")
        break
    case 'n':
        console.log("Boa noite!")
        break
    default:
        console.log("Não entendi.")
}

// 7 -

let generoFilme = (prompt("Insira o gênero do filme que quer assistir.")).toLowerCase()
let precoIngresso = Number(prompt( "Insira o preço do ingresso"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}

// Desafios

// 1 - 

let generoFilme = (prompt("Insira o gênero do filme que quer assistir.")).toLowerCase()
let precoIngresso = Number(prompt( "Insira o preço do ingresso"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
   if (true) {
       let snack = prompt("Insira o snack que comprará para assistir o filme")
       console.log (`Bom filme! ...com ${snack}.`)
   }
}
else {
    console.log("Escolha outro filme :(")
}

// 2 -
let nomeCompleto = (prompt("Insira seu nome completo.")).toLowerCase()
let tipoDeJogo = (prompt("Tipo de jogo (IN para internacional, DO para doméstico)")).toLowerCase()
let etapaDoJogo = (prompt("Etapa do jogo (SF para semi-final, DT para decisão de\
 terceiro lugar e FI para final)")).toLowerCase()
let categoria = Number(prompt("Categoria (1, 2, 3 ou 4)"))
let quantidadeDeIngressos = Number(prompt("Quantidade de ingressos."))

console.log("Dados da compra")
console.log("")

console.log(nomeCompleto)

if (tipoDeJogo === "in") {
    console.log("Tipo de jogo: Internacional")
} else if (tipoDeJogo === "do") {
    console.log("Tipo de jogo: Nacional")
} else {
    console.log("Tipo de jogo: não especificado")
}

switch (etapaDoJogo) {
    case "sf":
        console.log("Etapa do jogo: Semi-final")
        break
    case "dt":
        console.log("Etapa do jogo: Decisão de terceiro")
        break
    case "fi":
        console.log("Etapa do jogo: Final")
        break
    default:
        console.log("Etapa do jogo: não especificada")
}

switch (categoria) {
    case 1:
        console.log("Categoria: 1")
        break
    case 2:
        console.log("Categoria: 2")
        break
    case 3:
        console.log("Categoria: 3")
        break
    case 4:
        console.log("Categoria: 4")
    default:

}

console.log(`Quantidade de ingressos: ${quantidadeDeIngressos}`)
console.log("")

console.log("Valores")
const sfCategoria1 = 1320
const sfCategoria2 = 880
const sfCategoria3 = 550
const sfCategoria4 = 220
const dtCategoria1 = 660
const dtCategoria2 = 440
const dtCategoria3 = 330
const dtCategoria4 = 170
const fiCategoria1 = 1980
const fiCategoria2 = 1320
const fiCategoria3 = 880
const fiCategoria4 = 330

//Valor do ingresso

if (etapaDoJogo === "sf" && categoria === 1 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${sfCategoria1}`)
} else if (etapaDoJogo === "sf" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${sfCategoria1 / 4.10}`)
} else if (etapaDoJogo === "sf" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${sfCategoria2}`)
} else if (etapaDoJogo === "sf" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${sfCategoria2 / 4.10}`)
} else if (etapaDoJogo === "sf" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${sfCategoria3}`)
} else if (etapaDoJogo === "sf" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${sfCategoria3 / 4.10}`)
} else if (etapaDoJogo === "sf" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${sfCategoria4}`)
} else if (etapaDoJogo === "sf" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${sfCategoria4 / 4.10}`)

} else if (etapaDoJogo === "dt" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${dtCategoria1 / 4.10}`)
} else if (etapaDoJogo === "dt" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${dtCategoria2}`)
} else if (etapaDoJogo === "dt" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${dtCategoria2 / 4.10}`)
} else if (etapaDoJogo === "dt" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${dtCategoria3}`)
} else if (etapaDoJogo === "dt" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${dtCategoria3 / 4.10}`)
} else if (etapaDoJogo === "dt" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${dtCategoria4}`)
} else if (etapaDoJogo === "dt" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${dtCategoria4 / 4.10}`)

} else if (etapaDoJogo === "fi" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${fiCategoria1 / 4.10}`)
} else if (etapaDoJogo === "fi" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${fiCategoria2}`)
} else if (etapaDoJogo === "fi" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${fiCategoria2 / 4.10}`)
} else if (etapaDoJogo === "fi" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${fiCategoria3}`)
} else if (etapaDoJogo === "fi" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${fiCategoria3 / 4.10}`)
} else if (etapaDoJogo === "fi" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor do ingresso: R$ ${fiCategoria4}`)
} else if (etapaDoJogo === "fi" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor do ingresso: U$ ${fiCategoria4 / 4.10}`)
}

//Valor total

if (etapaDoJogo === "sf" && categoria === 1 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${sfCategoria1 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(sfCategoria1 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${sfCategoria2 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(sfCategoria2 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${sfCategoria3 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(sfCategoria3 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${sfCategoria4 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "sf" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(sfCategoria4 / 4.10) * quantidadeDeIngressos}`)

} else if (etapaDoJogo === "dt" && categoria === 1 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${dtCategoria1 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(dtCategoria1 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${dtCategoria2 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(dtCategoria2 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${dtCategoria3 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(dtCategoria3 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${dtCategoria4 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "dt" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(dtCategoria4 / 4.10) * quantidadeDeIngressos}`)

} else if (etapaDoJogo === "fi" && categoria === 1 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${fiCategoria1 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 1 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(fiCategoria1 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 2 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${(fiCategoria2 * quantidadeDeIngressos)}`)
} else if (etapaDoJogo === "fi" && categoria === 2 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(fiCategoria2 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 3 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${fiCategoria3 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 3 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(fiCategoria3 / 4.10) * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 4 && tipoDeJogo === "do") {
    console.log(`Valor Total: R$ ${fiCategoria4 * quantidadeDeIngressos}`)
} else if (etapaDoJogo === "fi" && categoria === 4 && tipoDeJogo === "in") {
    console.log(`Valor Total: U$ ${(fiCategoria4 / 4.10) * quantidadeDeIngressos}`)
}