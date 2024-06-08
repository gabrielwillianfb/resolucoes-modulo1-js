// Exercício 37 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerGabarito(tamanho) {
  let gabarito = [];
  for (let i = 0; i < tamanho; i++) {
    gabarito.push(prompt(`Digite o ${i + 1}º elemento do gabarito: `).toUpperCase());
  }
  return gabarito;
}

function lerRespostas(tamanho) {
  let respostas = [];
  for (let i = 0; i < tamanho; i++) {
    respostas.push(prompt(`Digite a ${i + 1}ª resposta: `).toUpperCase());
  }
  return respostas;
}

function verificarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

function verificarAlunos() {
  const tamanhoGabarito = 20;
  const numAlunos = 50;
  const notaAprovacao = 12;

  console.log("Digite o gabarito da prova:");
  const gabarito = lerGabarito(tamanhoGabarito);

  for (let i = 0; i < numAlunos; i++) {
    console.log(`\nDigite as respostas do aluno ${i + 1}:`);
    const respostas = lerRespostas(tamanhoGabarito);
    const acertos = verificarAcertos(gabarito, respostas);

    if (acertos >= notaAprovacao) {
      console.log(`Aluno ${i + 1} teve ${acertos} acertos. APROVADO`);
    } else {
      console.log(`Aluno ${i + 1} teve ${acertos} acertos. REPROVADO`);
    }
  }
}

verificarAlunos();
