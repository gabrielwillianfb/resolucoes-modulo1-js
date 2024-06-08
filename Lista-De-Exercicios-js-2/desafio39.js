// Exercício 39 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseFloat(prompt(`Digite o ${i + 1}º elemento do vetor: `)));
  }
  return vetor;
}

function compactarVetor(vetor) {
  let vetorCompactado = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
      vetorCompactado.push(vetor[i]);
    }
  }
  return vetorCompactado;
}

function main() {
  const tamanhoVetor = 100;
  const vetorA = lerVetor(tamanhoVetor);
  const vetorB = compactarVetor(vetorA);

  console.log("Vetor A (original):", vetorA);
  console.log("Vetor B (compactado):", vetorB);
}

main();
