// Exercício 45 da lista de exercícios 2 do modulo de JavaScript.

function contarOcorrencias(stringsArray) {
  const ocorrencias = {};

  for (let str of stringsArray) {
    if (ocorrencias[str]) {
      ocorrencias[str]++;
    } else {
      ocorrencias[str] = 1;
    }
  }
  return ocorrencias;
}

const arrayDeStrings = ["apple", "banana", "apple", "orange", "banana", "apple"];
const resultado = contarOcorrencias(arrayDeStrings);
console.log(resultado);
