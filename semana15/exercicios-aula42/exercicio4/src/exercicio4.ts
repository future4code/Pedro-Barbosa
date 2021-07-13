type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) Abrir o terminal, criar o arquivo tsconfig caso não esteja criado(manualmente ou via tsc --init)
//e então inputar tsc no terminal

//b) Depende de como estão os parâmetros do tsconfig.json. Se lá está indicando ./src como pasta de entrada,
//não.

//c) Sim. Utilizando o tsc somente, todos os arquivos da pasta serão transpilados, ou caso opte por arquivos 
//específicos, é só colocar o nome de cada um deles separado

//d)O arquivo dos slides só tem as linhas essenciais às configurações. Tem muitas opções interessantes de checagem de 
// digitação e limpeza de código, e até modularização.
