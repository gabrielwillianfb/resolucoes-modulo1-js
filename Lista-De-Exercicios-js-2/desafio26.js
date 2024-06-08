// Exercício 26 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function criarMatriz(linhas, colunas, nome) {
  let matriz = [];
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = parseFloat(prompt(`Digite o elemento ${nome}[${i + 1}][${j + 1}]: `));
    }
  }
  return matriz;
}

function calcularMatrizProduto(matrizA, matrizB) {
  let linhas = matrizA.length;
  let colunas = matrizA[0].length;
  let matrizProduto = [];

  for (let i = 0; i < linhas; i++) {
    matrizProduto[i] = [];
    for (let j = 0; j < colunas; j++) {
      matrizProduto[i][j] = matrizA[i][j] * matrizB[i][j];
    }
  }
  return matrizProduto;
}

function imprimirMatriz(matriz, nome) {
  console.log(`\nMatriz ${nome}:`);
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

const linhas = 3;
const colunas = 5;

console.log("Preenchendo a matriz A:");
const matrizA = criarMatriz(linhas, colunas, "A");

console.log("Preenchendo a matriz B:");
const matrizB = criarMatriz(linhas, colunas, "B");

const matrizProduto = calcularMatrizProduto(matrizA, matrizB);

imprimirMatriz(matrizA, "A");
imprimirMatriz(matrizB, "B");
imprimirMatriz(matrizProduto, "Produto P");
