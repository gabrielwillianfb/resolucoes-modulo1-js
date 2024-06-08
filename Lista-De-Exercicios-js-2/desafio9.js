// Exercício 9 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function calcularSalarios() {
  let totalSalarioHomens = 0;
  let totalSalarioMulheres = 0;
  let continuar = true;

  while (continuar) {
    let salario = parseFloat(prompt("Digite o salário do funcionário: "));
    let sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();

    if (sexo === "M") {
      totalSalarioHomens += salario;
    } else if (sexo === "F") {
      totalSalarioMulheres += salario;
    } else {
      console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
      continue;
    }

    let resposta = prompt("Deseja continuar? (S/N): ").toUpperCase();
    if (resposta !== "S") {
      continuar = false;
    }
  }

  console.log(`Total de salários pagos aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
  console.log(`Total de salários pagos às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
}

calcularSalarios();
