// Exercício 5 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function JoKenPo() {
  let jogador = prompt("Escolha entre pedra, papel ou tesoura: ").toLowerCase();
  let sistemaNumero = Math.floor(Math.random() * 3) + 1;
  let sistema;
  switch (sistemaNumero) {
    case 1:
      sistema = "pedra";
      break;
    case 2:
      sistema = "papel";
      break;
    case 3:
      sistema = "tesoura";
      break;
  }

  if (jogador === sistema) {
    console.log(`Empatou! Você jogou ${jogador} e o sistema jogou ${sistema}.`);
  } else {
    switch (jogador) {
      case "pedra":
        if (sistema === "tesoura") {
          console.log(
            `Você venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        } else {
          console.log(
            `O sistema venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        }
        break;
      case "papel":
        if (sistema === "pedra") {
          console.log(
            `Você venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        } else {
          console.log(
            `O sistema venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        }
        break;
      case "tesoura":
        if (sistema === "papel") {
          console.log(
            `Você venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        } else {
          console.log(
            `O sistema venceu! Você jogou ${jogador} e o sistema jogou ${sistema}.`
          );
        }
        break;
      default:
        console.log(
          "Digite uma das opções mencionadas: pedra, papel ou tesoura."
        );
        JoKenPo();
        break;
    }
  }
}

JoKenPo();
