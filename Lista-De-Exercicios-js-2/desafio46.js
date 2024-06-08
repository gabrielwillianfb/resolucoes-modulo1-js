// Exercício 46 da lista de exercícios 2 do modulo de JavaScript.

function sumarizarVendas(vendas) {
  const totalVendasPorVendedor = {};

  for (let venda of vendas) {
    const { vendedor, valor } = venda;

    if (totalVendasPorVendedor[vendedor]) {
      totalVendasPorVendedor[vendedor] += valor;
    } else {
      totalVendasPorVendedor[vendedor] = valor;
    }
  }
  return totalVendasPorVendedor;
}

const vendas = [
  { vendedor: "Alice", valor: 200 },
  { vendedor: "Bob", valor: 150 },
  { vendedor: "Alice", valor: 300 },
  { vendedor: "Charlie", valor: 400 },
  { vendedor: "Bob", valor: 100 },
];

const totalVendas = sumarizarVendas(vendas);
console.log(totalVendas);
