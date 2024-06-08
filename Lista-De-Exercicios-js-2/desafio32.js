// Exercício 32 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function criarMatrizM() {
  let matriz = [];
  for (let i = 0; i < 12; i++) {
    matriz[i] = [];
    for (let j = 0; j < 13; j++) {
      matriz[i][j] = parseFloat(prompt(`Digite o elemento M[${i + 1}][${j + 1}]: `));
    }
  }
  return matriz;
}

function maiorElementoModulo(linha) {
  return Math.max(...linha.map(Math.abs));
}

function modificarMatriz(matriz) {
  return matriz.map((linha) => {
    let maior = maiorElementoModulo(linha);
    return linha.map((elemento) => elemento / maior);
  });
}

function imprimirMatriz(matriz, titulo) {
  console.log(`\n${titulo}:`);
  matriz.forEach((linha) => console.log(linha.join(" ")));
}

const matrizM = criarMatrizM();
const matrizModificada = modificarMatriz(matrizM);

imprimirMatriz(matrizM, "Matriz Original");
imprimirMatriz(matrizModificada, "Matriz Modificada");
