// Exercício 4 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

const A = parseInt(prompt("Digite o primeiro valor: "));
const B = parseInt(prompt("Digite o segundo valor: "));
const C = parseInt(prompt("Digite o terceiro valor: "));

if (A < B + C && B < A + C && C < A + B) {
  console.log("Parabéns! É possível formar um triângulo com esses valores!");
} else {
  console.log("Infelizmente os valores não formam um triângulo.");
}
