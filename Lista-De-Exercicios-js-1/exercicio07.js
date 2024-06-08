// Exercício 7 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const frutasCompradas = Number(prompt("Quantas maçãs você deseja comprar: "));

if (frutasCompradas < 12 && frutasCompradas > 0) {
	var precoFinal = frutasCompradas * 0.3;
	console.log(`Você comprou ${frutasCompradas} maçãs por ${precoFinal}.`);
} else if (frutasCompradas >= 12) {
	var precoFinal = frutasCompradas * 0.25;
	console.log(`Você comprou ${frutasCompradas} maçãs por ${precoFinal}.`);
} else {
	console.log("Você não comprou maçãs.");
}
