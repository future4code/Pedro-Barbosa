/*
Exercícios de interpretação de código
1 - 
a. false               <-- true e false = false
b. false               <-- true e false e true = false
c. true                <-- true e true ou true = true
e. boolean             <-- operadores lógicos tem valor booleano

2 - 
a. undefined           <-- não foi atribuído valor, portanto, indefinido
b. null                <-- foi atribuído valor null
c. 11                  <-- A array tem 11 elementos
d. 3                   <-- se i=0, está referenciando a primeira array do grupo, logo, 3
e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]       <-- array impressa 
com o segundo elemento substituído (i+1=1 já que i = 0, que é o segundo número do index)
f. 9                   <-- sexto número do index, logo, sétimo elemento da array

*/

//  Exercícios 

//1
let idade = prompt("Qual é sua idade?")
let idadeAmigo = prompt("Qual é a idade do seu melhor amigo(a)?")
const idadeDiferencaBoolean = Number(idade) > Number(idadeAmigo)
const idadeDiferenca = Number(idade) - Number(idadeAmigo)
let idadeMensagem = `Sua idade é maior que a do seu melhor amigo? ${idadeDiferencaBoolean}`

console.log(idadeMensagem)
console.log(idadeDiferenca)
console.log("")

//2
let numeroPar = prompt("Insira um número par")
const divisaoNumeroPar = Number(numeroPar) % 2


console.log(divisaoNumeroPar)
/* em números pares divididos por dois, a sobra sempre é zero, enquanto nos ímpares,
sempre 1 */

//3
const listaDeTarefas = []
const primeiraTarefa = prompt("Insira a primeira tarefa do seu dia!")
const segundaTarefa = prompt("Insira a segunda tarefa do seu dia!")
const terceiraTarefa = prompt("Insira a terceira tarefa do seu dia!")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

console.log(listaDeTarefas)

const removerTarefa = prompt("Digite a tarefa que deseja remover, sendo primeira = 0, segunda = 1 e terceira = 2")
listaDeTarefas.splice(removerTarefa, 1)
console.log(listaDeTarefas)

// 4
const emailDoUsuario = prompt("Insira seu e-mail.")
const nomeDoUsuario = prompt("Insira seu nome.")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Desafios

// 1.

let grausFahrenheit
let grausCelsius
let kelvin

//a.
grausFahrenheit = 77
kelvin = (grausFahrenheit - 32) * 5 / 9 + 273.15
console.log(`a. ${kelvin} K`)
console.log("")

//b.
grausCelsius = 80
grausFahrenheit = (grausCelsius) * 9 / 5 + 32
console.log(`b. ${grausFahrenheit} °F`)
console.log("")

//c.
grausCelsius = 30
grausFahrenheit = (grausCelsius) * 9 / 5 + 32
console.log(`c. ${grausFahrenheit} °F`)
kelvin = (grausFahrenheit - 32) * 5 / 9 + 273.15
console.log(`${kelvin} K`)
console.log("")

//d.
grausCelsius = prompt("Insira o valor em Celsius.")
grausFahrenheit = Number(grausCelsius) * 9 / 5 + 32
console.log(`d. ${grausFahrenheit} °F`)
kelvin = (grausFahrenheit - 32) * 5 / 9 + 273.15
console.log(`${kelvin} K`)
console.log("")

// 2
let quantidadeHora
let quilowattCusto
// a.

quantidadeHora = 280
quilowattCusto = quantidadeHora * 0.05
console.log(`R$${quilowattCusto}`)

// b.
valorDeDesconto = 15
desconto = (100 - valorDeDesconto) / 100
quantidadeHora = 280
quilowattCusto = quantidadeHora * 0.05 * desconto
console.log(`Preço com desconto de 15%: R$${quilowattCusto}`)

// 3

// a.
let libras
let quilograma

libras = 20
quilograma = libras / 2.2046
console.log(`a. ${libras}lb equivalem a ${quilograma}kg`)
console.log("")

// b.
let oncas

oncas = 10.5
quilograma = oncas / 35.274
console.log(`b. ${oncas}oz equivalem a ${quilograma}kg`)
console.log("")

// c.
let milhas
let metros

milhas = 100
metros = milhas / 0.00062137
console.log(`c. ${milhas}mi equivalem a ${metros}m`)
console.log("")

// d.
let pes

pes = 50
metros = pes / 3.2808
console.log(`d. ${pes}ft equivalem a ${metros}m`)
console.log("")

//e.
let galao
let litros

galao = 103.56
litros = galao / 0.26417
console.log(`e. ${galao}gal equivalem a ${litros}l`)
console.log("")


//f.
let xic

xic = 450
litros = xic / 4.167
console.log(`f. ${xic} xic equivalem a ${litros}l`)
console.log("")

//g.

libras = prompt("Insira aqui o valor das libras para converter para quilos")
quilograma = libras / 2.2046
console.log(`g. ${libras}lb equivalem a ${quilograma}kg`)












