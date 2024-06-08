// Exercício 40 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerVetor(tamanho, descricao) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(parseInt(prompt(`Digite o ${i + 1}º número do ${descricao}: `), 10));
  }
  return vetor;
}

function compararVetores(vetor1, vetor2) {
  if (vetor1.length !== vetor2.length) return false;
  for (let i = 0; i < vetor1.length; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false;
    }
  }
  return true;
}

function main() {
  const tamanhoVetor = 5;
  const numeroApostas = 50;

  const resultadoOficial = lerVetor(tamanhoVetor, "resultado oficial da Loto");

  for (let i = 0; i < numeroApostas; i++) {
    console.log(`\nDigite os números da aposta ${i + 1}:`);
    const aposta = lerVetor(tamanhoVetor, "aposta");
    if (compararVetores(resultadoOficial, aposta)) {
      console.log(`Aposta ${i + 1}: Ganhador!`);
    } else {
      console.log(`Aposta ${i + 1}: Não ganhou.`);
    }
  }
}

main();
