//a) A entrada é uma array de números, e a saída é a ordenação crescente desses números

type estatisticas = {
  maior: number,
  menor: number,
  media: number,
};

function obterEstatisticas(numeros: number[]) : estatisticas {
  const numerosOrdenados = numeros.sort((a, b) => a - b);

  let soma = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

//b) numerosOrdenados: number[], soma: number, estatisticas : estatisticas

//c)

type amostraDeIdades = {
    numeros: number[]
    obterEstatisticas: (numeros: number[]) => estatisticas
}