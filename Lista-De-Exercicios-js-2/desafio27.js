// Exercício 27 da lista de exercícios 2 do modulo de JavaScript.

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

function multiplicarMatrizPorValor(matriz, valor) {
  let vetor = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      vetor.push(matriz[i][j] * valor);
    }
  }
  return vetor;
}

function imprimirVetor(vetor) {
  console.log("\nVetor V:");
  console.log(vetor.join(" "));
}

const linhas = 6;
const colunas = 6;
console.log("Preenchendo a matriz M:");
const matrizM = criarMatriz(linhas, colunas);
const valorA = parseFloat(prompt("Digite o valor A para multiplicar a matriz M: "));
const vetorV = multiplicarMatrizPorValor(matrizM, valorA);
imprimirVetor(vetorV);
