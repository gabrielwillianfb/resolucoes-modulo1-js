// Exercício 33 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function criarMatriz() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      matriz[i][j] = parseFloat(prompt(`Digite o elemento M[${i + 1}][${j + 1}]: `));
    }
  }
  return matriz;
}

function mediaDiagonalSecundaria(matriz) {
  let soma = matriz[0][2] + matriz[1][1] + matriz[2][0];
  return soma / 3;
}

function modificarMatriz(matriz, media) {
  let matrizModificada = matriz.map((linha, i) => linha.slice());
  for (let i = 0; i < 3; i++) {
    matrizModificada[i][i] *= media;
  }
  return matrizModificada;
}

function imprimirMatriz(matriz, titulo) {
  console.log(`\n${titulo}:`);
  matriz.forEach((linha) => console.log(linha.join(" ")));
}

const matriz = criarMatriz();
const media = mediaDiagonalSecundaria(matriz);
const matrizModificada = modificarMatriz(matriz, media);

imprimirMatriz(matriz, "Matriz Original");
imprimirMatriz(matrizModificada, "Matriz Modificada");
