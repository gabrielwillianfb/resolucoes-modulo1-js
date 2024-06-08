// Exercício 21 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularPesoIdeal(altura, sexo) {
  let pesoIdeal;

  if (sexo.toLowerCase() === "masculino" || sexo.toLowerCase() === "m") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo.toLowerCase() === "feminino" || sexo.toLowerCase() === "f") {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    throw new Error("Sexo inválido. Por favor, informe 'masculino' ou 'feminino'.");
  }
  return pesoIdeal.toFixed(2);
}

function main() {
  try {
    let altura = parseFloat(prompt("Digite a altura em metros (ex: 1.75): "));
    let sexo = prompt("Digite o sexo (masculino/feminino): ");
    let pesoIdeal = calcularPesoIdeal(altura, sexo);
    console.log(`O peso ideal para uma pessoa com ${altura}m de altura e sexo ${sexo} é: ${pesoIdeal} kg.`);
  } catch (error) {
    console.error(error.message);
  }
}

main();
