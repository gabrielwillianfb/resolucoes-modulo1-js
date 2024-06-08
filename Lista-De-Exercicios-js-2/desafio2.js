// Exercício 2 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function verificarMulta() {
  let velocidade = parseFloat(prompt("Digite a velocidade do carro em km/h: "));

  if (isNaN(velocidade) || velocidade === "") {
    console.log("Insira a velocidade em números.");
    verificarMulta();
  } else {
    velocidade = parseFloat(velocidade);
    const velocidadePermitida = 80;
    const valorMultaPorKm = 5.0;

    if (velocidade > velocidadePermitida) {
      let excesso = velocidade - velocidadePermitida;
      let valorMulta = excesso * valorMultaPorKm;
      console.log(`Você foi multado! O valor da multa é R$ ${valorMulta.toFixed(2)}.`);
    } else {
      console.log("Você está dentro do limite de velocidade permitido.");
    }
  }
}

verificarMulta();
