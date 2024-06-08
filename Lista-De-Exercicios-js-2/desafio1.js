// Exercício 1 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularPerdaDeVida() {
  let cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
  let anosFumando = parseInt(prompt("Há quantos anos você fuma? "));

  let totalCigarros = cigarrosPorDia * anosFumando * 365;
  let minutosPerdidos = totalCigarros * 10;
  let diasPerdidos = minutosPerdidos / (60 * 24);

  console.log(`Você perdeu aproximadamente ${diasPerdidos.toFixed(2)} dias de vida devido ao fumo.`);
}

calcularPerdaDeVida();
