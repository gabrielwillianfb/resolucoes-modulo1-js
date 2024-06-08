// Exercício 15 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerNumeros() {
  let numeros = [];
  console.log("Digite 10 números inteiros:");

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Número ${i + 1}: `));
    numeros.push(numero);
  }
  return numeros;
}

function encontrarPares(numeros) {
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push({ numero: numeros[i], posicao: i });
    }
  }
  return pares;
}

const numeros = lerNumeros();
const pares = encontrarPares(numeros);

if (pares.length === 0) {
  console.log("Não foram digitados números pares.");
} else {
  console.log("Números pares digitados e suas posições:");
  pares.forEach((par) => {
    console.log(`Número ${par.numero} na posição ${par.posicao}.`);
  });
}
