// Exercício 49 da lista de exercícios 2 do modulo de JavaScript.

function organizarTransacoesPorCategoria(transacoes) {
  const categorias = {};

  transacoes.forEach((transacao) => {
    const { categoria, valor } = transacao;

    if (categorias[categoria]) {
      categorias[categoria].push(transacao);
      categorias[categoria].subtotal += valor;
    } else {
      categorias[categoria] = [transacao];
      categorias[categoria].subtotal = valor;
    }
  });
  return categorias;
}

const transacoes = [
  { id: 1, valor: 100, data: "2024-06-01", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "2024-06-02", categoria: "Transporte" },
  { id: 3, valor: 200, data: "2024-06-03", categoria: "Alimentação" },
  { id: 4, valor: 150, data: "2024-06-04", categoria: "Lazer" },
  { id: 5, valor: 80, data: "2024-06-05", categoria: "Transporte" },
];

const categoriasTransacoes = organizarTransacoesPorCategoria(transacoes);
console.log(categoriasTransacoes);
