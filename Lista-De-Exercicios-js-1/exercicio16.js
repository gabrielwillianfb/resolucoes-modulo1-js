// Exercício 16 da lista de exercícios passada na aula 06.

let contador = 0;
let numero = 101;

function primo(number) {
	if (number < 2) return false;
	for (let i = 2; i <= number / 2; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

while (contador < 50) {
	if (primo(numero)) {
		console.log(numero);
		contador++;
	}
	numero++;
}
