// Exercício 35 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function imprimirEVaziarVetor(vetor, tipo) {
  console.log(`${tipo}: ${vetor.join(" ")}`);
  return [];
}

function separarValores() {
  let vetorPares = [];
  let vetorImpares = [];
  const maxTamanho = 5;

  for (let i = 0; i < 30; i++) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º valor: `), 10);

    if (valor % 2 === 0) {
      vetorPares.push(valor);
      if (vetorPares.length === maxTamanho) {
        vetorPares = imprimirEVaziarVetor(vetorPares, "Pares");
      }
    } else {
      vetorImpares.push(valor);
      if (vetorImpares.length === maxTamanho) {
        vetorImpares = imprimirEVaziarVetor(vetorImpares, "Ímpares");
      }
    }
  }

  if (vetorPares.length > 0) {
    imprimirEVaziarVetor(vetorPares, "Pares");
  }
  if (vetorImpares.length > 0) {
    imprimirEVaziarVetor(vetorImpares, "Ímpares");
  }
}

separarValores();
