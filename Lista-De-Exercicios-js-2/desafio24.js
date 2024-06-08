// Exercício 24 da lista de exercícios 2 do modulo de JavaScript.

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

function contarNegativosPorLinha(matriz) {
  let vetorC = [];
  for (let i = 0; i < matriz.length; i++) {
    let count = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] < 0) {
        count++;
      }
    }
    vetorC.push(count);
  }
  return vetorC;
}

function imprimirMatriz(matriz) {
  console.log("\nMatriz M:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

function imprimirVetor(vetor) {
  console.log("\nVetor C (quantidade de elementos negativos por linha):");
  console.log(vetor.join(" "));
}

const linhas = 6;
const colunas = 8;
const matrizM = criarMatriz(linhas, colunas);
imprimirMatriz(matrizM);

const vetorC = contarNegativosPorLinha(matrizM);
imprimirVetor(vetorC);
