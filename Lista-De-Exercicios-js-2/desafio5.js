// Exercício 5 da lista de exercícios 2 do módulo de JavaScript.

const prompt = require("prompt-sync")();

function JoKenPo() {
  const opcoes = ["pedra", "papel", "tesoura"];

  let jogador = prompt("Escolha entre pedra, papel ou tesoura: ").toLowerCase();

  if (!opcoes.includes(jogador)) {
    console.log("Escolha inválida.");
    return JoKenPo();
  }

  let sistemaNum = Math.floor(Math.random() * 3);
  let sistema = opcoes[sistemaNum];

  if (jogador === sistema) {
    console.log("Empate!");
  } else if (
    (jogador === "pedra" && sistema === "tesoura") ||
    (jogador === "papel" && sistema === "pedra") ||
    (jogador === "tesoura" && sistema === "papel")
  ) {
    resultado = "Você venceu!";
  } else {
    resultado = "O sistema venceu!";
  }
  console.log(`Você escolheu: ${jogador}. O sistema escolheu: ${sistema}. ${resultado}`);
}

JoKenPo();
