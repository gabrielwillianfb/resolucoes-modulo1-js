// Exercício 30 da lista de exercícios 2 do modulo de JavaScript.

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

function calcularSomas(matriz) {
  let somasLinhas = [];
  let somasColunas = [];

  for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    let somaColuna = 0;

    for (let j = 0; j < matriz[i].length; j++) {
      somaLinha += matriz[i][j];
      somaColuna += matriz[j][i];
    }

    somasLinhas.push(somaLinha);
    somasColunas.push(somaColuna);
  }
  return { somasLinhas, somasColunas };
}

function imprimirMatrizEvetores(matriz, SL, SC) {
  console.log("\nMatriz M:");
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }

  console.log("\nVetor SL (somas das linhas):", SL.join(" "));
  console.log("Vetor SC (somas das colunas):", SC.join(" "));
}

const linhas = 5;
const colunas = 5;
const matrizM = criarMatriz(linhas, colunas);
const { somasLinhas, somasColunas } = calcularSomas(matrizM);

imprimirMatrizEvetores(matrizM, somasLinhas, somasColunas);
