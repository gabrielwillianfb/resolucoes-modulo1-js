// Exercício 11 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function progressaoAritmetica() {
  let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
  let razao = parseFloat(prompt("Digite a razão da PA: "));

  let pa = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    pa.push(termo);
    soma += termo;
  }

  console.log("Os 10 primeiros termos da PA são: ", pa.join(", "));
  console.log("A soma dos 10 primeiros termos da PA é: ", soma);
}

progressaoAritmetica();
