// Exercício 8 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularPontosEDinheiro(horasAtividade) {
  let pontos = 0;
  let dinheiro = 0.05;

  if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
  } else if (horasAtividade <= 20) {
    pontos = 10 * 2 + (horasAtividade - 10) * 5;
  } else {
    pontos = 10 * 2 + 10 * 5 + (horasAtividade - 20) * 10;
  }

  let dinheiroGanho = pontos * dinheiro;

  return {
    pontos: pontos,
    dinheiro: dinheiroGanho.toFixed(2),
  };
}

let horasAtividade = parseFloat(prompt("Digite o número de horas de atividade física no mês: "));
let resultado = calcularPontosEDinheiro(horasAtividade);

console.log(`Você ganhou ${resultado.pontos} pontos e R$ ${resultado.dinheiro}`);
