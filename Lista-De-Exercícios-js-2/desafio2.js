// Exercício 2 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();
const VELOCIDADEPERMITIDA = 80;

function SistemaDeMultas() {
  let velocidadeDoCarro = parseInt(
    prompt("Qual a velocidade do seu veículo? ")
  );

  if (velocidadeDoCarro > VELOCIDADEPERMITIDA) {
    let multa = (velocidadeDoCarro - VELOCIDADEPERMITIDA) * 5;
    console.log(
      `Você recebeu uma multa no valor de R$ ${multa.toFixed(
        2
      )} por dirigir acima da velocidade permitida (${VELOCIDADEPERMITIDA} KM/H)`
    );
  } else if (velocidadeDoCarro != Number) {
    console.log("Insira a velocidade em números.");
    SistemaDeMultas();
  } else {
    return false;
  }
}

SistemaDeMultas();
