// Exercício 1 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const celsius = parseInt(prompt("Qual a temperatura atual em °C? "));
const fahrenheit = celsius * 1.8 + 32;
console.log("A temperatura em fahrenheit é: " + fahrenheit.toFixed(0));
