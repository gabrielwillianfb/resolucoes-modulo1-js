// Exercício 18 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerRegistroFuncionario() {
  let funcionario = {
    nome: prompt("Digite o nome do funcionário: "),
    cargo: prompt("Digite o cargo do funcionário: "),
    salario: parseFloat(prompt("Digite o salário do funcionário: "))
  };

  return funcionario;
}

function mostrarRegistroFuncionario(funcionario) {
  console.log("\nDados do Funcionário:");
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Cargo: ${funcionario.cargo}`);
  console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
}

const funcionario = lerRegistroFuncionario();
mostrarRegistroFuncionario(funcionario);
