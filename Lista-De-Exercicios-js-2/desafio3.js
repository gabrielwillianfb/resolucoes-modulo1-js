// Exercício 3 da lista de exercícios 2 do módulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularPrecoPassagem() {
  let distancia = prompt("Digite a distância que deseja percorrer em km: ");

  if (isNaN(distancia) || distancia === "") {
    console.log("Insira a distância em números.");
    calcularPrecoPassagem();
  } else {
    distancia = parseFloat(distancia);

    let precoPorKm;
    if (distancia <= 200) {
      precoPorKm = 0.5;
    } else {
      precoPorKm = 0.45;
    }

    let precoTotal = distancia * precoPorKm;
    console.log(`O preço da passagem é R$ ${precoTotal.toFixed(2)}.`);
  }
}

calcularPrecoPassagem();
