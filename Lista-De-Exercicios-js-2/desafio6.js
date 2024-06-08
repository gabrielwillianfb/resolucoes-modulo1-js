// Exercício 6 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function jogoDeAdivinhacao() {
  const numeroSorteado = Math.floor(Math.random() * 5) + 1;
  let tentativas = 3;

  console.log("Bem-vindo ao jogo de adivinhação!");
  console.log("Tente adivinhar um número entre 1 e 5.");

  while (tentativas > 0) {
    const palpite = parseInt(prompt("Qual é o seu palpite? "));

    if (palpite === numeroSorteado) {
      console.log("Parabéns! Você acertou o número sorteado.");
      return;
    } else {
      tentativas--;
      if (tentativas > 0) {
        console.log(`Você errou! Restam ${tentativas} tentativas.`);
      } else {
        console.log("Você perdeu! O número sorteado era:", numeroSorteado);
      }
    }
  }
}

jogoDeAdivinhacao();
