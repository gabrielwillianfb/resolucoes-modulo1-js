// Exercício 15 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

let somaPonderada = 0;
let somaDosPesos = 0;
let numero;
let peso;

while (true) {
	numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));

	if (numero === 0) {
		break;
	}
	peso = parseFloat(prompt("Digite o peso do número " + numero + ": "));

	somaPonderada += numero * peso;
	somaDosPesos += peso;
}

if (somaDosPesos !== 0) {
	let mediaPonderada = somaPonderada / somaDosPesos;
	console.log("A média ponderada dos números é: " + mediaPonderada.toFixed(2));
} else {
	console.log("Nenhum número foi digitado.");
}
