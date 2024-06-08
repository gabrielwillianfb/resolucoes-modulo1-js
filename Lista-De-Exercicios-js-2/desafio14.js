// Exercício 14 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerNomes() {
  let nomes = [];
  console.log("Digite os nomes das pessoas:");

  for (let i = 0; i < 7; i++) {
    let nome = prompt(`Nome ${i + 1}: `);
    nomes.push(nome);
  }
  return nomes;
}

function mostrarNomesInversos(nomes) {
  console.log("\nListagem dos nomes na ordem inversa:");

  for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
  }
}

const nomes = lerNomes();
mostrarNomesInversos(nomes);
