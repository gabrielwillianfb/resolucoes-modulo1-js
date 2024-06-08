// Exercício 36 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function lerGabarito(tamanho) {
  let gabarito = [];
  for (let i = 0; i < tamanho; i++) {
    gabarito.push(parseInt(prompt(`Digite o ${i + 1}º elemento do gabarito: `), 10));
  }
  return gabarito;
}

function lerRespostas(tamanho) {
  let respostas = [];
  for (let i = 0; i < tamanho; i++) {
    respostas.push(parseInt(prompt(`Digite a ${i + 1}ª resposta: `), 10));
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

function verificarApostadores() {
  const tamanhoGabarito = 13;
  const numApostadores = 100;

  console.log("Digite o gabarito do teste:");
  const gabarito = lerGabarito(tamanhoGabarito);

  for (let i = 0; i < numApostadores; i++) {
    console.log(`\nDigite as informações do apostador ${i + 1}:`);
    const numCartao = parseInt(prompt("Número do cartão: "), 10);
    const respostas = lerRespostas(tamanhoGabarito);
    const acertos = verificarAcertos(gabarito, respostas);

    console.log(`Apostador ${numCartao} teve ${acertos} acertos.`);
    if (acertos === 13) {
      console.log("Parabéns, tu foi o GANHADOR!");
    }
  }
}

verificarApostadores();
