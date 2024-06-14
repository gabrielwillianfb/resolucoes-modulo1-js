const prompt = require("prompt-sync")();

class Hotel {
  constructor(id, nome, cidade, quartosTotais) {
    this.id = id;
    this.nome = nome;
    this.cidade = cidade;
    this.quartosTotais = quartosTotais;
    this.quartosDisponiveis = quartosTotais;
    this.avaliacoes = [];
  }
}

class Reserva {
  constructor(idReserva, idHotel, nomeCliente) {
    this.idReserva = idReserva;
    this.idHotel = idHotel;
    this.nomeCliente = nomeCliente;
  }
}

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel(nome, cidade, quartosTotais) {
  let novoHotel = new Hotel(proximoIdHotel, nome, cidade, quartosTotais);
  hoteis.push(novoHotel);
  proximoIdHotel++;
  console.log(`Hotel "${nome}" adicionado com sucesso.`);
}

function buscarHoteisPorCidade(cidade) {
  let hoteisNaCidade = hoteis.filter(
    (hotel) => hotel.cidade.toLowerCase() === cidade.toLowerCase()
  );
  if (hoteisNaCidade.length > 0) {
    console.log(`Hotéis disponíveis em ${cidade}:`);
    hoteisNaCidade.forEach((hotel) => {
      console.log(
        `- ${hotel.nome} (${hotel.quartosDisponiveis} quartos disponíveis de ${hotel.quartosTotais})`
      );
    });
  } else {
    console.log(`Não há hotéis disponíveis em ${cidade}.`);
  }
}

function fazerReserva(idHotel, nomeCliente) {
  let hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (hotel) {
    if (hotel.quartosDisponiveis > 0) {
      let novaReserva = new Reserva(proximoIdReserva, idHotel, nomeCliente);
      reservas.push(novaReserva);
      proximoIdReserva++;
      hotel.quartosDisponiveis--;
      console.log(`Reserva realizada com sucesso para ${nomeCliente} no hotel "${hotel.nome}".`);
    } else {
      console.log(`Não há quartos disponíveis no hotel "${hotel.nome}".`);
    }
  } else {
    console.log(`Hotel com ID ${idHotel} não encontrado.`);
  }
}

function cancelarReserva(idReserva) {
  let reservaIndex = reservas.findIndex((reserva) => reserva.idReserva === idReserva);
  if (reservaIndex !== -1) {
    let reserva = reservas[reservaIndex];
    let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    reservas.splice(reservaIndex, 1);
    hotel.quartosDisponiveis++;
    console.log(`Reserva ${idReserva} cancelada com sucesso.`);
  } else {
    console.log(`Reserva com ID ${idReserva} não encontrada.`);
  }
}

function realizarCheckIn(idReserva) {
  let reserva = reservas.find((reserva) => reserva.idReserva === idReserva);
  if (reserva) {
    let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    if (hotel.quartosDisponiveis < hotel.quartosTotais) {
      hotel.quartosDisponiveis++;
      console.log(`Check-in realizado para reserva ${idReserva} no hotel "${hotel.nome}".`);
    } else {
      console.log(`Não foi possível realizar o check-in. Todos os quartos já estão ocupados.`);
    }
  } else {
    console.log(`Reserva com ID ${idReserva} não encontrada.`);
  }
}

function realizarCheckOut(idReserva) {
  let reserva = reservas.find((reserva) => reserva.idReserva === idReserva);
  if (reserva) {
    let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    if (hotel.quartosDisponiveis > 0) {
      hotel.quartosDisponiveis--;
      console.log(`Check-out realizado para reserva ${idReserva} no hotel "${hotel.nome}".`);
    } else {
      console.log(`Não foi possível realizar o check-out. Todos os quartos já estão desocupados.`);
    }
  } else {
    console.log(`Reserva com ID ${idReserva} não encontrada.`);
  }
}

function relatorioOcupacaoHotel(idHotel) {
  let hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (hotel) {
    let ocupacaoPercentual =
      ((hotel.quartosTotais - hotel.quartosDisponiveis) / hotel.quartosTotais) * 100;
    console.log(`Relatório de Ocupação para o hotel "${hotel.nome}":`);
    console.log(`- Quartos Totais: ${hotel.quartosTotais}`);
    console.log(`- Quartos Disponíveis: ${hotel.quartosDisponiveis}`);
    console.log(`- Percentual de Ocupação: ${ocupacaoPercentual.toFixed(2)}%`);
  } else {
    console.log(`Hotel com ID ${idHotel} não encontrado.`);
  }
}

function avaliarHotel(idHotel, avaliacao) {
  let hotel = hoteis.find((hotel) => hotel.id === idHotel);
  if (hotel) {
    if (!hotel.avaliacoes) {
      hotel.avaliacoes = [];
    }
    hotel.avaliacoes.push(avaliacao);
    console.log(`Avaliação adicionada para o hotel "${hotel.nome}": ${avaliacao}`);
  } else {
    console.log(`Hotel com ID ${idHotel} não encontrado.`);
  }
}

function listarReservas() {
  console.log("Lista de reservas:");
  reservas.forEach((reserva) => {
    let hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    console.log(
      `- Reserva ${reserva.idReserva}: ${reserva.nomeCliente} no hotel "${hotel.nome}" em ${hotel.cidade}`
    );
  });
}

function mostrarMenu() {
  console.log(`
  ===== Menu de Opções =====
  1. Adicionar Hotel
  2. Buscar Hotéis por Cidade
  3. Fazer Reserva
  4. Cancelar Reserva
  5. Realizar Check-in
  6. Realizar Check-out
  7. Relatório de Ocupação de um Hotel
  8. Avaliar Hotel
  9. Listar Reservas
  10. Sair
  `);
}

function iniciarSistema() {
  console.log("Bem-vindo ao sistema de reserva de hotéis!");
  mostrarMenu();

  while (true) {
    let opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        let nome = prompt("Nome do hotel: ");
        let cidade = prompt("Cidade: ");
        let quartosTotais = parseInt(prompt("Número de quartos totais: "));
        adicionarHotel(nome, cidade, quartosTotais);
        break;
      case "2":
        let cidadeBusca = prompt("Digite a cidade: ");
        buscarHoteisPorCidade(cidadeBusca);
        break;
      case "3":
        let idHotel = parseInt(prompt("ID do hotel: "));
        let nomeCliente = prompt("Nome do cliente: ");
        fazerReserva(idHotel, nomeCliente);
        break;
      case "4":
        let idReservaCancelar = parseInt(prompt("ID da reserva a ser cancelada: "));
        cancelarReserva(idReservaCancelar);
        break;
      case "5":
        let idReservaCheckIn = parseInt(prompt("ID da reserva para realizar check-in: "));
        realizarCheckIn(idReservaCheckIn);
        break;
      case "6":
        let idReservaCheckOut = parseInt(prompt("ID da reserva para realizar check-out: "));
        realizarCheckOut(idReservaCheckOut);
        break;
      case "7":
        let idHotelRelatorio = parseInt(prompt("ID do hotel para gerar relatório de ocupação: "));
        relatorioOcupacaoHotel(idHotelRelatorio);
        break;
      case "8":
        let idHotelAvaliar = parseInt(prompt("ID do hotel para avaliar: "));
        let avaliacao = prompt("Digite sua avaliação: ");
        avaliarHotel(idHotelAvaliar, avaliacao);
        break;
      case "9":
        listarReservas();
        break;
      case "10":
        console.log("Saindo do sistema. Obrigado!");
        return;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        mostrarMenu();
    }

    console.log("\n");
  }
}

iniciarSistema();
