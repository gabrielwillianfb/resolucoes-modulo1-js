// Exercício 19 da lista de exercícios 2 do modulo de JavaScript.

const prompt = require("prompt-sync")();

function validarHorario(horario) {
  const [hh, mm, ss] = horario.split(":").map(Number);

  if (hh >= 0 && hh < 24 && mm >= 0 && mm < 60 && ss >= 0 && ss < 60) {
    return { hh, mm, ss };
  } else {
    return null;
  }
}

function lerHorarios() {
  let horarios = [];

  for (let i = 0; i < 5; i++) {
    let horarioValido = false;
    let horario;

    while (!horarioValido) {
      horario = prompt(`Digite o horário ${i + 1} no formato HH:MM:SS: `);
      const validado = validarHorario(horario);

      if (validado) {
        horarios.push(validado);
        horarioValido = true;
      } else {
        console.log("Horário inválido. Tente novamente.");
      }
    }
  }
  return horarios;
}

function mostrarHorarios(horarios) {
  console.log("\nHorários fornecidos:");

  horarios.forEach(({ hh, mm, ss }) => {
    console.log(`${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`);
  });
}

const horarios = lerHorarios();
mostrarHorarios(horarios);
