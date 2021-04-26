/*
Exercícios de interpretação
1 -
a. 
10
50 

b. Seria impresso somente 50. O return faria com que fosse retornada a
última variável salva na função.

2 - 
a.
Darvas
Caio

b. 
Amanda
Caio

3 - 
Insere na array números pares multiplicados por si mesmos.
Um bom nome para a função seria multipNumsPares.
*/

// Exercícios de escrita de código

// 4 - 
//a.
function sobreMim() {
    let nome = "Pedro Rodrigues"
    let idade = "24 anos"
    let estado = "São Paulo"
    let profissao = "estudante"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e sou ${profissao}.`)

} 

sobreMim()

// b.
function sobreMim2(nome, idade, estado, estudante) {
    if (estudante) {
        estudanteOuNao = "sou"
    } else {
        estudanteOuNao = "não sou"
    }
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${estado} e ${estudanteOuNao} estudante.`

    return frase

}

const frase1 = sobreMim2("Pedro Rodrigues", 24, "São Paulo", true)
console.log(frase1)

// 5 -
// a.
function somaDoisNumeros(num1, num2) {
    const soma = num1 + num2
    return soma
}

const resultado1 = somaDoisNumeros(2, 4)
console.log(`A soma dá ${resultado1}.`)

// b.
function comparacaoDoisNum(num1, num2) {
    const comparacao = num1 >= num2
    if (comparacao) {
        maiorOuIgual = "maior que ou igual a"
    } else {
        maiorOuIgual = "menor que "
    }
    const frase = `${num1} é ${maiorOuIgual}o ${num2}.`
    return frase
}

const comparacao1 = comparacaoDoisNum(5, 6)
console.log(comparacao1)

// c.
function impressaoRepetida(frase) {
    const fraseRepetida = String (frase + "\n").repeat(10) 
    return fraseRepetida
}

const frase1 = impressaoRepetida("Hasta la vista, baby!")
console.log(frase1)

// 6 -
// a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function quantidadeNumArray(array) {
    const contagem = array.length
    return contagem

}
const contagem1 = quantidadeNumArray(array)
console.log(contagem1)

// b.
function numeroPar(num) {
    const parOuNao = num % 2 === 0

    return parOuNao
}

const testePar1 = numeroPar(234)
console.log(testePar1)

// c.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeNumPar(array) {
    let contagem = 0
    for (let numeros of array) {
        const par = numeros % 2 === 0
        if (par) {
            contagem += 1
        } 
    }
    return contagem

}
const contagem1 = quantidadeNumPar(array)
console.log(contagem1)

// d.

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeNumPar(array) {
    let contagem = 0
    for (let numeros of array) {
        const par = numeroPar(numeros)
        if (par) {
            contagem += 1
        } 
    }
    return contagem

}
const contagem1 = quantidadeNumPar(array)
console.log(contagem1)

Desafios

// 1.

let arrowFunction1 = (parametro) => {
    return console.log(parametro)
}

const testeArrowFunction1 = arrowFunction1("quitiulu")

let arrowFunction2 = (num1, num2) => {
    const soma = num1 + num2
    arrowFunction1(soma)
}

const testeArrowFunction2 = arrowFunction2(2, 2)

// 2.
// a.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function filtroPares(array) {
    const novaArray = []
    for (let numeros of array) {
        numPar = numeros % 2 === 0
        if (numPar) {
            novaArray.push(numeros)
        }
    }
    return novaArray
}

const filtroPares1 = filtroPares(numeros)
console.log(filtroPares1)

// b.

function filtroMaior(array) {
    numMaior = Number.NEGATIVE_INFINITY
    for (let numeros of array) {
        if (numeros > numMaior) {
            numMaior = numeros
         }
    }
    return numMaior
}

const filtroMaior1 = filtroMaior(numeros)
console.log(filtroMaior1)

// c.

function filtroMaiorIdx(array) {
    numMaior = Number.NEGATIVE_INFINITY
    for (let numeros of array) {
        if (numeros > numMaior) {
            numMaior = numeros
         }
    }
    return array.indexOf(numMaior) 
}

const filtroMaiorIdx1 = filtroMaiorIdx(numeros)
console.log(filtroMaiorIdx1)

// d.

function inverterArray(array) {
    return array.reverse();
}

const inverterArray1 = inverterArray(numeros)
console.log(inverterArray1)