// Exercício 1 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();
const CigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = parseInt(prompt("Por quantos anos você fumou? "));
const totalCigarrosFumados = CigarrosPorDia * anosFumando * 365;
const minutosPerdidos = totalCigarrosFumados * 10;
const diasPerdidos = minutosPerdidos / (24 * 60);

console.log(`Você perdeu ${diasPerdidos.toFixed(0)} dias de vida.`);
