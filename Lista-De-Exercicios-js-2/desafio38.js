// Exercício 38 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerVetor(tamanho) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseFloat(prompt(`Digite o ${i + 1}º elemento do vetor: `)));
  }
  return vetor;
}

function somaElementos(vetor) {
  return vetor.reduce((acc, val) => acc + val, 0);
}
function produtoElementos(vetor) {
  return vetor.reduce((acc, val) => acc * val, 1);
}

function ordenarElementos(vetor) {
  return vetor.slice().sort((a, b) => a - b);
}

function executarOperacao() {
  const tamanhoVetor = 6;
  const vetor = lerVetor(tamanhoVetor);

  const operacaoMensagem =
    "Escolha uma operação:\n" +
    "1- Soma dos elementos\n" +
    "2- Produto dos elementos\n" +
    "3- Média dos elementos\n" +
    "4- Ordene os elementos em ordem crescente\n" +
    "5- Mostre o vetor";

  console.log(operacaoMensagem);
  const operacao = parseInt(prompt("Digite o número da operação desejada: "), 10);
  let resultado;

  switch (operacao) {
    case 1:
      resultado = `Soma dos elementos: ${somaElementos(vetor)}`;
      break;
    case 2:
      resultado = `Produto dos elementos: ${produtoElementos(vetor)}`;
      break;
    case 3:
      resultado = "Operação inválida para esta versão.";
      break;
    case 4:
      resultado = `Elementos em ordem crescente: ${ordenarElementos(vetor).join(" ")}`;
      break;
    case 5:
      resultado = `Vetor: ${vetor.join(" ")}`;
      break;
    default:
      resultado = "Operação inválida.";
  }

  console.log(resultado);
}
executarOperacao();
