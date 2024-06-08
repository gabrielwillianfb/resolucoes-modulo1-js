// Exercício 3 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const primeiroNumero = parseInt(prompt("Digite o 1° número inteiro: "));
const segundoNumero = parseInt(prompt("Digite o 2° número inteiro: "));
const terceiroNumero = parseInt(prompt("Digite o 3° número inteiro: "));
var quartoNumero = parseInt(prompt("Digite o 3° número inteiro: "));

const somaPrimeiro = primeiroNumero + 25;
const triplicarValor = segundoNumero * 3;
const modifiqueParaPercent = terceiroNumero * 0.12;
var quartoNumero = primeiroNumero + segundoNumero + terceiroNumero;

console.log(somaPrimeiro);
console.log(triplicarValor);
console.log(modifiqueParaPercent);
console.log(quartoNumero);