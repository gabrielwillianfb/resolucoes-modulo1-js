// Exercício 6 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const A = parseInt(prompt("Digite o primeiro valor: "));
const B = parseInt(prompt("Digite o segundo valor: "));
const C = parseInt(prompt("Digite o terceiro valor: "));

if (A < B + C && B < A + C && C < A + B) {
    if ((A === B) || (A === C) || (B === C)) {
        console.log("Triângulo isósceles");
    } else if (A != B && B != C) {
        console.log("Triângulo escaleno");
    } else {
        console.log("Triângulo eqüilátero")
    }
} else {
    console.log("Os valores não formam um triângulo.")
}