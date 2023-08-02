let numerosGanadores = [];
let numerosElegidos = [];

for (let i = 0; i < 5; i++) {
  numerosGanadores.push(Math.floor(Math.random() * 99 + 1));
}

function extraerInput(evento) {
  evento.preventDefault();
  numerosElegidos = [
    parseInt(document.getElementById("numero1").value),
    parseInt(document.getElementById("numero2").value),
    parseInt(document.getElementById("numero3").value),
    parseInt(document.getElementById("numero4").value),
    parseInt(document.getElementById("numero5").value)
  ];
  if (numerosElegidos.some(isNaN)) {
    alert("Por favor completa todos los campos.");
    return;
  }
  let numerosCoincidentes = loteria(numerosGanadores, numerosElegidos);
  mostrarResultado(numerosCoincidentes);
}

document.getElementById("numerosFormulario").addEventListener("submit", extraerInput);

function loteria(numerosGanadores, numerosElegidos) {
  let numerosCoincidentes = [];
  for (let i = 0; i < numerosElegidos.length; i++) {
    if (numerosGanadores.includes(numerosElegidos[i])) {
      numerosCoincidentes.push(numerosElegidos[i]);
    }
  }
  return numerosCoincidentes;
}

function mostrarResultado(numerosCoincidentes) {
  let mensaje;
  switch (numerosCoincidentes.length) {
    case 0:
      mensaje = "Lo siento, no has adivinado ningún número, los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    case 1:
      mensaje = "Adivinaste un número! Los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    case 2:
      mensaje = "Adivinaste dos números! Los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    case 3:
      mensaje = "Adivinaste tres números! Los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    case 4:
      mensaje = "Adivinaste cuatro números! Los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    case 5:
      mensaje = "Lotería! Los ganadores fueron: " + numerosGanadores.join(", ");
      break;
    default:
      mensaje = "Algo salió mal :(";
      break;
  }
  alert(mensaje);
}

function resetearLoteria() {
    numerosGanadores = [];
    for (let i = 0; i < 5; i++) {
        numerosGanadores.push(Math.floor(Math.random() * 99));
    }
    numerosElegidos = [];
    document.getElementById("numerosFormulario").reset();
}

document.getElementById("botonDeReseteo").addEventListener("click", resetearLoteria);