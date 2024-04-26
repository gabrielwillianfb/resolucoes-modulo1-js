// Exercício 14 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

while (true) {
	numero = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));

	if (numero === 0) {
		break;
	}

	soma += numero;
	contador++;
}

if (contador !== 0) {
	let media = soma / contador;
	console.log("A média dos números digitados é: " + media.toFixed(2));
} else {
	console.log("Fechando programa.");
}
