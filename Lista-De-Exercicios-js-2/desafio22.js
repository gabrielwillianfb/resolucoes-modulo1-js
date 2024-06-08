// Exercício 22 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function coletarDados() {
  let salarios = [];
  let numFilhos = [];
  let continuar = true;

  while (continuar) {
    let salario = parseFloat(prompt("Digite o salário: "));
    let filhos = parseInt(prompt("Digite o número de filhos: "));

    salarios.push(salario);
    numFilhos.push(filhos);

    let resposta = prompt("Deseja continuar? (s/n): ").toLowerCase();
    if (resposta !== "s") {
      continuar = false;
    }
  }

  return { salarios, numFilhos };
}

function calcularEstatisticas(salarios, numFilhos) {
  let totalSalarios = salarios.reduce((acc, val) => acc + val, 0);
  let totalFilhos = numFilhos.reduce((acc, val) => acc + val, 0);

  let mediaSalarios = totalSalarios / salarios.length;
  let mediaFilhos = totalFilhos / numFilhos.length;
  let maiorSalario = Math.max(...salarios);
  let percentualAte350 = (salarios.filter((salario) => salario <= 350).length / salarios.length) * 100;

  return {
    mediaSalarios: mediaSalarios.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(2),
    maiorSalario: maiorSalario.toFixed(2),
    percentualAte350: percentualAte350.toFixed(2),
  };
}

function mostrarEstatisticas(estatisticas) {
  console.log("\nEstatísticas da pesquisa:");
  console.log(`Média de salário da população: R$ ${estatisticas.mediaSalarios}`);
  console.log(`Média do número de filhos: ${estatisticas.mediaFilhos}`);
  console.log(`Maior salário: R$ ${estatisticas.maiorSalario}`);
  console.log(`Percentual de pessoas com salário até R$ 350,00: ${estatisticas.percentualAte350}%`);
}

function main() {
  const { salarios, numFilhos } = coletarDados();
  const estatisticas = calcularEstatisticas(salarios, numFilhos);
  mostrarEstatisticas(estatisticas);
}

main();
