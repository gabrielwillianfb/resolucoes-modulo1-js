// Exercício 44 da lista de exercícios 2 do modulo de JavaScript.

function contarStrings(obj) {
  let contador = 0;
  for (let chave in obj) {
    if (typeof obj[chave] === "string") {
      contador++;
    }
  }
  return contador;
}

const exemploObj = {
  nome: "Carlos",
  idade: 25,
  email: "carlos@example.com",
  endereco: "Rua 123",
  ativo: true,
  nota: "A",
};

const numeroStrings = contarStrings(exemploObj);
console.log(`Número de propriedades do tipo string: ${numeroStrings}`);
