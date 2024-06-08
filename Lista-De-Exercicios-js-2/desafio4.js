// Exercício 4 da lista de exercícios 2 do módulo de JavaScript.

const prompt = require("prompt-sync")();

function verificarTriangulo() {
  let segmentoA = prompt("Digite o comprimento do primeiro segmento de reta: ");
  let segmentoB = prompt("Digite o comprimento do segundo segmento de reta: ");
  let segmentoC = prompt("Digite o comprimento do terceiro segmento de reta: ");

  if (isNaN(segmentoA) || segmentoA === "" || isNaN(segmentoB) || segmentoB === "" || isNaN(segmentoC) || segmentoC === "") {
    console.log("Insira os comprimentos dos segmentos em números.");
    verificarTriangulo();
  } else {
    segmentoA = parseFloat(segmentoA);
    segmentoB = parseFloat(segmentoB);
    segmentoC = parseFloat(segmentoC);

    if (segmentoA < segmentoB + segmentoC && segmentoB < segmentoA + segmentoC && segmentoC < segmentoA + segmentoB) {
      console.log("Os segmentos podem formar um triângulo.");
    } else {
      console.log("Os segmentos não podem formar um triângulo.");
    }
  }
}

verificarTriangulo();
