// Exercício 23 da lista de exercícios 2 do modulo de JavaScript.

function criarMatrizIdentidade(tamanho) {
  let matriz = [];

  for (let i = 0; i < tamanho; i++) {
    matriz[i] = [];
    for (let j = 0; j < tamanho; j++) {
      if (i === j) {
        matriz[i][j] = 1;
      } else {
        matriz[i][j] = 0;
      }
    }
  }
  return matriz;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

const tamanho = 7;
const matrizIdentidade = criarMatrizIdentidade(tamanho);
imprimirMatriz(matrizIdentidade);
