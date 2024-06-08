// Exercício 7 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularCustoAluguel(tipoCarro, diasAluguel, kmPercorridos) {
  let custoDiaria;
  let custoPorKm;

  if (tipoCarro === "popular") {
    custoDiaria = 90;
    if (kmPercorridos <= 100) {
      custoPorKm = 0.2;
    } else {
      custoPorKm = 0.1;
    }
  } else if (tipoCarro === "luxo") {
    custoDiaria = 150;
    if (kmPercorridos <= 200) {
      custoPorKm = 0.3;
    } else {
      custoPorKm = 0.25;
    }
  } else {
    return "Tipo de carro inválido.";
  }

  let custoTotalDiaria = custoDiaria * diasAluguel;
  let custoTotalKm = custoPorKm * kmPercorridos;
  let custoTotal = custoTotalDiaria + custoTotalKm;

  return `O custo total do aluguel é R$ ${custoTotal.toFixed(2)}`;
}

let tipoCarro = prompt("Digite o tipo de carro (popular ou luxo): ").toLowerCase();
let diasAluguel = parseInt(prompt("Digite o número de dias de aluguel: "));
let kmPercorridos = parseFloat(prompt("Digite o número de Km percorridos: "));

let resultado = calcularCustoAluguel(tipoCarro, diasAluguel, kmPercorridos);
console.log(resultado);
