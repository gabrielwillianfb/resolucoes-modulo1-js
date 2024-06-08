// Exercício 34 da lista de exercícios 2 do modulo de JavaScript.

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

function modificarMatriz(matriz) {
  let matrizModificada = matriz.map((linha, i) => linha.map((elemento) => elemento * matriz[i][i]));
  return matrizModificada;
}

function imprimirMatriz(matriz, titulo) {
  console.log(`\n${titulo}:`);
  matriz.forEach((linha) => console.log(linha.join(" ")));
}

const matriz = criarMatriz();
const matrizModificada = modificarMatriz(matriz);

imprimirMatriz(matrizModificada, "Matriz Modificada");
