// Exercício 28 da lista de exercícios 2 do modulo de JavaScript.

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

function somaAcimaDiagonal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = i + 1; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

function somaAbaixoDiagonal(matriz) {
  let soma = 0;
  for (let i = 1; i < matriz.length; i++) {
    for (let j = 0; j < i; j++) {
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

const linhas = 10;
const colunas = 10;
const matrizM = criarMatriz(linhas, colunas);

imprimirMatriz(matrizM);

const somaAcima = somaAcimaDiagonal(matrizM);
const somaAbaixo = somaAbaixoDiagonal(matrizM);

console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);
