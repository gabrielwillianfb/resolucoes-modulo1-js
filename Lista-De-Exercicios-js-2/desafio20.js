// Exercício 20 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerDadosEmpregados(numEmpregados) {
  let empregados = [];

  for (let i = 0; i < numEmpregados; i++) {
    console.log(`\nDados do empregado ${i + 1}:`);
    let matricula = prompt("Matrícula: ");
    let nome = prompt("Nome: ");
    let salarioBruto = parseFloat(prompt("Salário bruto: "));
    empregados.push({ matricula, nome, salarioBruto });
  }
  return empregados;
}

function calcularContracheque(empregado) {
  const deducaoINSS = empregado.salarioBruto * 0.12;
  const salarioLiquido = empregado.salarioBruto - deducaoINSS;

  return {
    matricula: empregado.matricula,
    nome: empregado.nome,
    salarioBruto: empregado.salarioBruto.toFixed(2),
    deducaoINSS: deducaoINSS.toFixed(2),
    salarioLiquido: salarioLiquido.toFixed(2),
  };
}

function mostrarContracheques(empregados) {
  console.log("\nContracheques dos funcionários:");

  empregados.forEach((empregado) => {
    const contracheque = calcularContracheque(empregado);
    console.log(`\nMatrícula: ${contracheque.matricula}`);
    console.log(`Nome: ${contracheque.nome}`);
    console.log(`Salário bruto: R$ ${contracheque.salarioBruto}`);
    console.log(`Dedução INSS: R$ ${contracheque.deducaoINSS}`);
    console.log(`Salário líquido: R$ ${contracheque.salarioLiquido}`);
  });
}

const numEmpregados = 80;
const empregados = lerDadosEmpregados(numEmpregados);
mostrarContracheques(empregados);
