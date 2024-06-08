// Exercício 16 da lista de exercícios 2 do modulo de JavaScript.

function gerarNumerosAleatorios(n) {
  let numeros = [];

  for (let i = 0; i < n; i++) {
    numeros.push(Math.floor(Math.random() * 100));
  }

  return numeros;
}

function ordenarNumeros(numeros) {
  return numeros.sort((a, b) => a - b);
}

function mostrarNumeros(numeros) {
  console.log("Números gerados: " + numeros.join(", "));
  console.log("Números ordenados: " + ordenarNumeros(vetor).join(", "));
}

const vetor = gerarNumerosAleatorios(20);
mostrarNumeros(vetor);
