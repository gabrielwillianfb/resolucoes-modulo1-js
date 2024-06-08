// Exercício 42 da lista de exercícios 2 do modulo de JavaScript.

const dados = {
  nome: "Maria",
  idade: 30,
  hobbies: ["leitura", "escrever", "viajar"],
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
  },
  notas: [90, 85, 88],
  email: "maria@example.com",
  filhos: ["Ana", "Lucas"],
  altura: 1.65,
};

function filtrarArrays(obj) {
  let resultado = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      resultado[key] = obj[key];
    }
  }
  return resultado;
}
const arraysSomente = filtrarArrays(dados);
console.log(arraysSomente);
