// Exercício 4 e 5 da lista de exercícios passada na aula 06.

const prompt = require("prompt-sync")();

const nota1 = parseInt(prompt("Digite a nota da prova: "));
const nota2 = parseInt(prompt("Digite a nota da prova: "));

if ((nota1 + nota2) / 2 >= 6) {
    console.log("PARABÉNS! Você foi aprovado");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}