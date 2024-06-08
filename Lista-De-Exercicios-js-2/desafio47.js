// Exercício 47 da lista de exercícios 2 do modulo de JavaScript.

function transformarObjeto(objeto, funcao) {
  const novoObjeto = {};

  for (let chave in objeto) {
    if (objeto.hasOwnProperty(chave)) {
      novoObjeto[chave] = funcao(objeto[chave]);
    }
  }
  return novoObjeto;
}

const objetoOriginal = {
  a: 1,
  b: 2,
  c: 3,
};

const funcao = (valor) => valor * 2;
const objetoTransformado = transformarObjeto(objetoOriginal, funcao);
console.log(objetoTransformado);
