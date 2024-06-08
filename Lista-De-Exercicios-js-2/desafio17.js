// Exercício 17 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerDadosPessoas() {
  let nomes = [];
  let idades = [];

  for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `));

    nomes.push(nome);
    idades.push(idade);
  }
  return { nomes, idades };
}

function mostrarMenoresDeIdade(nomes, idades) {
  console.log("\nPessoas menores de idade:");

  for (let i = 0; i < nomes.length; i++) {
    if (idades[i] < 18) {
      console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
  }
}

const { nomes, idades } = lerDadosPessoas();
mostrarMenoresDeIdade(nomes, idades);
