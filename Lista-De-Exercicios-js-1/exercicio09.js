// Exercício 9 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const codigo = parseInt(prompt("Digite o código de origem do produto: "));

if (codigo === 1) {
	console.log("Sul");
} else if (codigo === 2) {
	console.log("Norte");
} else if (codigo === 3) {
	console.log("Leste");
} else if (codigo === 4) {
	console.log("Oeste");
} else if ((codigo === 5 || codigo === 6) || (codigo >= 25 && codigo <= 50)) {
	console.log("Nordeste");
} else if (codigo >= 7 && codigo <= 9) {
	console.log("Sudeste");
} else if (codigo >= 10 && codigo <= 20) {
	console.log("Centro-Oeste");
} else {
	console.log("Produto Importado");
}
