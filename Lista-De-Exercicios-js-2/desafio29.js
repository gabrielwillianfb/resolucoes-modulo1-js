// Exercício 29 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function criarMatriz(linhas, colunas) {
  let matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = parseFloat(prompt(`Digite o elemento M[${i + 1}][${j + 1}]: `));
    }
  }
  return matriz;
}

function somaLinha(matriz, linha) {
  let soma = 0;
  for (let j = 0; j < matriz[linha].length; j++) {
    soma += matriz[linha][j];
  }
  return soma;
}

function somaColuna(matriz, coluna) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][coluna];
  }
  return soma;
}

function somaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

function somaTodosElementos(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

function imprimirMatriz(matriz) {
  console.log("\nMatriz M:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

const linhas = 5;
const colunas = 5;
const matrizM = criarMatriz(linhas, colunas);

imprimirMatriz(matrizM);

const somaLinha4 = somaLinha(matrizM, 3); // Linha 4 (índice 3)
const somaColuna2 = somaColuna(matrizM, 1); // Coluna 2 (índice 1)
const somaDiagonal = somaDiagonalPrincipal(matrizM);
const somaTotal = somaTodosElementos(matrizM);

console.log(`\nSoma da linha 4: ${somaLinha4}
Soma da coluna 2: ${somaColuna2}
Soma da diagonal principal: ${somaDiagonal}
Soma de todos os elementos: ${somaTotal}`);
