// Exercício 10 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function ehPar(numero) {
  return numero % 2 === 0;
}

function calcularEstatisticas() {
  let continuar;
  let soma = 0;
  let menor;
  let quantidadeValores = 0;
  let quantidadePares = 0;

  do {
    let numero = parseFloat(prompt("Digite um número: "));
    soma += numero;

    if (quantidadeValores === 0 || numero < menor) {
      menor = numero;
    }

    if (ehPar(numero)) {
      quantidadePares++;
    }

    quantidadeValores++;
    continuar = prompt("Deseja continuar? (S/N) ").toUpperCase() === "S";
  } while (continuar);

  let media = soma / quantidadeValores;

  console.log(
    `a) O somatório entre todos os valores: ${soma}\n` +
    `b) O menor valor digitado: ${menor}\n` +
    `c) A média entre todos os valores: ${media.toFixed(2)}\n` +
    `d) Quantidade de valores pares: ${quantidadePares}`
  );
}

calcularEstatisticas();
