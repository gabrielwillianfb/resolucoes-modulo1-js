// Exercício 48 da lista de exercícios 2 do modulo de JavaScript.

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  const inventarioCombinado = {};

  for (let item in inventarioLojaA) {
    inventarioCombinado[item] = inventarioLojaA[item];
  }

  for (let item in inventarioLojaB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }
  return inventarioCombinado;
}

const inventarioLojaA = {
  item1: 10,
  item2: 20,
  item3: 30,
};

const inventarioLojaB = {
  item2: 15,
  item3: 25,
  item4: 35,
};

const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioCombinado);
