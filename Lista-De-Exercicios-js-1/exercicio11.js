// Exercício 11 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

var numero = parseInt(prompt("Digite um valor maior que zero (0): "));

while (numero !== null && numero > 0) {
	if (numero % 2 === 0) {
		console.log("Par");
	} else {
		console.log("Impar");
	}
	numero = parseInt(prompt("Digite outro valor: "));
}
