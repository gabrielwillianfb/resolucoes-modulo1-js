// Exercício 43 da lista de exercícios 2 do modulo de JavaScript.

const obj1 = {
  nome: "Maria",
  idade: 30,
  email: "maria@example.com",
};

const obj2 = {
  idade: 35,
  profissao: "Engenheira",
  email: "maria.eng@example.com",
};

function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const objCombinado = combinarObjetos(obj1, obj2);
console.log(objCombinado);
