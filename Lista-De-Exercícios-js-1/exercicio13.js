// Exercício 13 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

function tabuada(N) {
	for (let i = 1; i <= N; i++) {
		console.log(i + " x " + N + " = " + i * N);
	}
}

for (let j = 0; j < 5; j++) {
	let valor = parseInt(prompt("Insira um valor:"));

	if (!isNaN(valor)) {
		console.log("Tabuada do " + valor + ":");
		tabuada(valor);
	} else {
		console.log("Valor inválido. Por favor, insira um número.");
	}
}
