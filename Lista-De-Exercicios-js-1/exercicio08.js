// Exercício 8 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const valor1 = Number(prompt("Digite o primeiro valor: "));
const valor2 = Number(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
	return;
} else if (valor1 < valor2) {
	console.log(valor1, valor2);
} else {
	console.log(valor2, valor1);
}
