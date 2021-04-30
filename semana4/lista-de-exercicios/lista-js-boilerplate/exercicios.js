//Exercício 1

function inverteArray(array) {
   let arrayInvertida = []
   let indiceArray = array.length - 1

   while (indiceArray >= 0) {
      arrayInvertida.push(array[indiceArray])
      indiceArray -= 1;

   }
   return arrayInvertida
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let arrayNumParElevados = []

   for (let numero of array) {
      if (numero % 2 === 0) {
         let numElevados = numero * numero
         arrayNumParElevados.push(numElevados)
      }
   }
   return arrayNumParElevados

}

//Exercício 3

function retornaNumerosPares(array) {
   let arrayNumPar = []

   for (let numero of array) {
      if (numero % 2 === 0) {
         arrayNumPar.push(numero)
      }
   }

   return arrayNumPar
}

//Exercício 4

function retornaMaiorNumero(array) {
   numMaior = Number.NEGATIVE_INFINITY
   for (let numeros of array) {
      if (numeros > numMaior) {
         numMaior = numeros
      }
   }
   return numMaior
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   tamanhoArray = array.length
   return tamanhoArray
}

//Exercício 6

function retornaExpressoesBooleanas() {
   let expressoesBooleanas = []
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   let expressao1 = booleano1 && booleano2 && !booleano4
   let expressao2 = (booleano1 && booleano2) || !booleano3
   let expressao3 = (booleano2 || booleano3) && (booleano4 || booleano1)
   let expressao4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   let expressao5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

   expressoesBooleanas.push(expressao1, expressao2, expressao3, expressao4, expressao5)

   return expressoesBooleanas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayNPares = []
   let proximosCinco = n * 2
   for (i = 0; i < proximosCinco; i++) {
      if (i % 2 === 0) {
         arrayNPares.push(i)
      }
   }
   return arrayNPares
}

// Exercício 8

function checaTriangulo(a, b, c) {

   let ValorTriangulo 

   if (a === b && a === c) {
      ValorTriangulo = "Equilátero"
   } else if (a === b && a !== c) {
      ValorTriangulo = "Isósceles"
   } else {
      ValorTriangulo = "Escaleno"
   }
   return ValorTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}