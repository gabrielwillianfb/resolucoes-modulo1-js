// Exercício 3 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function CalcularPrecoPassagem() {
  let distanciaDesejada = parseInt(
    prompt("Digite a distância que deseja percorrer em kilometros: ")
  );

  if (distanciaDesejada <= 200) {
    let precoFinal = distanciaDesejada * 0.5;
    console.log(`Sua viagem sairá por R$ ${precoFinal.toFixed(2)}.`);
  } else if (distanciaDesejada > 200) {
    let precoFinal = distanciaDesejada * 0.45;
    console.log(`Sua viagem sairá por R$ ${precoFinal.toFixed(2)}.`);
  } else if (VelocidadeDoCarro != Number) {
    console.log("Insira a distância em números.");
    CalcularPrecoPassagem();
  }
}

CalcularPrecoPassagem();
