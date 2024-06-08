// Exercício 12 da lista de exercícios 2 do modulo de JavaScript.

function fibonacci(n) {
  let fibonacciSeq = [1, 1];

  for (let i = 2; i < n; i++) {
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }
  return fibonacciSeq;
}

const sequenciaFibonacci = fibonacci(10);
console.log("Os 10 primeiros elementos da Sequência de Fibonacci são: " + sequenciaFibonacci.join(", "));
