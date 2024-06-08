// Exercício 31 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function criarMatrizV() {
  let matrizV = [];
  for (let i = 0; i < 30; i++) {
    matrizV[i] = [];
    for (let j = 0; j < 30; j++) {
      matrizV[i][j] = parseInt(prompt(`Digite o elemento V[${i + 1}][${j + 1}]: `));
    }
  }
  return matrizV;
}

function contarValoresEcriarMatrizX(matrizV, A) {
  let contadorA = 0;
  let matrizX = [];

  for (let i = 0; i < matrizV.length; i++) {
    matrizX[i] = [];
    for (let j = 0; j < matrizV[i].length; j++) {
      if (matrizV[i][j] === A) {
        contadorA++;
      } else {
        matrizX[i].push(matrizV[i][j]);
      }
    }
  }
  return { contadorA, matrizX };
}

function imprimirResultados(contadorA, matrizX) {
  console.log(`\nQuantidade de valores iguais a A na matriz V: ${contadorA}`);
  console.log("Matriz X (valores diferentes de A):");
  for (let i = 0; i < matrizX.length; i++) {
    console.log(matrizX[i].join(" "));
  }
}

const A = parseInt(prompt("Digite o número inteiro A: "));
const matrizV = criarMatrizV();

const { contadorA, matrizX } = contarValoresEcriarMatrizX(matrizV, A);

imprimirResultados(contadorA, matrizX);
