// Exercício 25 da lista de exercícios 2 do modulo de JavaScript.

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

function somaColunas(matriz) {
  let colunas = matriz[0].length;
  let somaColunas = new Array(colunas).fill(0);

  for (let j = 0; j < colunas; j++) {
    for (let i = 0; i < matriz.length; i++) {
      somaColunas[j] += matriz[i][j];
    }
  }
  return somaColunas;
}

function imprimirMatriz(matriz) {
  console.log("\nMatriz M:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

function imprimirSomaColunas(somas) {
  console.log("\nSoma de cada coluna:");
  for (let j = 0; j < somas.length; j++) {
    console.log(`Coluna ${j + 1}: ${somas[j].toFixed(2)}`);
  }
}

const linhas = 15;
const colunas = 20;
const matrizM = criarMatriz(linhas, colunas);
imprimirMatriz(matrizM);

const somaDasColunas = somaColunas(matrizM);
imprimirSomaColunas(somaDasColunas);
