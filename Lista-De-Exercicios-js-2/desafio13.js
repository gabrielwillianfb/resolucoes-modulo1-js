// Exercício 13 da lista de exercícios 2 do modulo de JavaScript.

function gerarSequenciaFibonacci(n) {
  let fibonacciSeq = [];

  fibonacciSeq[0] = 1;
  fibonacciSeq[1] = 1;

  for (let i = 2; i < n; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }
  return fibonacciSeq;
}

const vetorFibonacci = gerarSequenciaFibonacci(15);
console.log("Vetor preenchido com os primeiros 15 números da Sequência de Fibonacci: " + vetorFibonacci);
