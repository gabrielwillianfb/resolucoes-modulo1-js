// Exercício 5 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
let chute = prompt("Escolha um número de 1 até 5: ");

while (true) {
  if (chute != numeroAleatorio) {
    chute = prompt("Errou! Tente outra vez: ");
  } else {
    console.log(`Acertou! O valor era ${numeroAleatorio}.`);
    break;
  }
}
