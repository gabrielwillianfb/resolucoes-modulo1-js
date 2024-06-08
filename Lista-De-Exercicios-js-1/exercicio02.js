// Exercício 2 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const eleitores = parseInt(prompt("Digite o número total de eleitores: "));
const brancos = parseInt(prompt("Digite o número total de votos em branco: "));
const nulos = parseInt(prompt("Digite o número total de votos nulos: "));
const validos = parseInt(prompt("Digite o número total de votos válidos: "));
const percentuais = calcularPercentual(eleitores, brancos, nulos, validos);

function calcularPercentual(eleitores, brancos, nulos, validos) {
	const percentualBrancos = (brancos / eleitores) * 100;
	const percentualNulos = (nulos / eleitores) * 100;
	const percentualValidos = (validos / eleitores) * 100;

	return {
		brancos: percentualBrancos.toFixed(2) + "%",
		nulos: percentualNulos.toFixed(2) + "%",
		validos: percentualValidos.toFixed(2) + "%",
	};
}


console.log("Percentual de votos brancos: " + percentuais.brancos);
console.log("Percentual de votos nulos: " + percentuais.nulos);
console.log("Percentual de votos válidos: " + percentuais.validos);