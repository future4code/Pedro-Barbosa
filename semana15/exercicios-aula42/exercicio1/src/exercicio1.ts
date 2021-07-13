//a)

import { RAINBOW_COLORS } from "./enum";

// const minhaString: string = 2;
// R: É dito que número não pode ser atribuído a uma variável do tipo string

//b)
const meuNumero: number = 2;
// trocando o tipo da variável de number para any

//c)
type person = {
    name: string,
    age: number,
    favoriteColor: RAINBOW_COLORS
}

const pedro: person = {
    name: "Pedro Rodrigues",
    age: 24,
    favoriteColor: RAINBOW_COLORS.INDIGO
}

const bia: person = {
    name: "Bianca Karoline",
    age: 21,
    favoriteColor: RAINBOW_COLORS.BLUE
}

const joao: person = {
    name: "Joab Souza",
    age: 18,
    favoriteColor: RAINBOW_COLORS.GREEN
}

const ronaldinho: person = {
    name: "Ronaldo de Assis",
    age: 41,
    favoriteColor: RAINBOW_COLORS.RED
}

